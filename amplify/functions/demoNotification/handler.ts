import type { DynamoDBStreamHandler } from "aws-lambda";
import { Logger } from "@aws-lambda-powertools/logger";
import { SESClient, SendEmailCommand, ListVerifiedEmailAddressesCommand, VerifyEmailAddressCommand } from "@aws-sdk/client-ses";

const logger = new Logger({
    logLevel: "INFO",
    serviceName: "dynamodb-stream-handler",
});

const sesClient = new SESClient({ region: 'ap-southeast-2' });

// Function to verify email address
async function verifyEmailAddress(emailAddress: string): Promise<void> {
  try {
    const command = new VerifyEmailAddressCommand({
      EmailAddress: emailAddress
    });
    await sesClient.send(command);
    logger.info(`Verification email sent to: ${emailAddress}`);
  } catch (error) {
    logger.error('Error verifying email:', error as Error);
    throw error;
  }
}

// Function to check if email is verified
async function isEmailVerified(emailAddress: string): Promise<boolean> {
  try {
    const command = new ListVerifiedEmailAddressesCommand({});
    const { VerifiedEmailAddresses } = await sesClient.send(command);
    return VerifiedEmailAddresses?.includes(emailAddress) || false;
  } catch (error) {
    logger.error('Error checking email verification:', error as Error);
    throw error;
  }
}

export const handler: DynamoDBStreamHandler = async (event) => {
  logger.info("Starting to process records");
  
  const senderEmail = "evoncapitalorg@gmail.com"; // Your sender email
  
  // First verify sender email if not already verified
  try {
    if (!(await isEmailVerified(senderEmail))) {
      logger.info(`Sender email ${senderEmail} not verified. Initiating verification...`);
      await verifyEmailAddress(senderEmail);
      throw new Error('Please verify the sender email address first. Check your email for verification link.');
    }

    for (const record of event.Records) {
      logger.info(`Processing record: ${record.eventID}`);
      logger.info(`Event Type: ${record.eventName}`);

      if (record.eventName === "INSERT") {
        const newImage = record.dynamodb?.NewImage;
        logger.info(`New Image: ${JSON.stringify(newImage)}`);

        if (newImage) {
          const email = newImage.email?.S;
          const firstName = newImage.firstName?.S;
          const lastName = newImage.lastName?.S;
          const businessType = newImage.businessType?.S;
          const website = newImage.website?.S;

          if (email) {
            try {
              const command = new SendEmailCommand({
                Destination: {
                  ToAddresses: [email],
                },
                Message: {
                  Body: {
                    Html: {
                      Data: `
                        <html>
                          <head>
                            <style>
                              body { font-family: Arial, sans-serif; line-height: 1.6; }
                              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                              .header { background-color: #f8f9fa; padding: 20px; text-align: center; }
                              .content { padding: 20px; }
                              .footer { text-align: center; padding: 20px; color: #6c757d; }
                            </style>
                          </head>
                          <body>
                            <div class="container">
                              <div class="header">
                                <h1>Demo Request Confirmation</h1>
                              </div>
                              <div class="content">
                                <p>Dear ${firstName} ${lastName},</p>
                                <p>Thank you for requesting a demo of our services. We have received your submission for ${businessType} business at ${website}.</p>
                                <p>Our team will contact you shortly to schedule your personalized demo.</p>
                                <p>Best regards,<br>AdVantage AI Team</p>
                              </div>
                              <div class="footer">
                                <p>© 2025 AdVantage AI. All rights reserved.</p>
                              </div>
                            </div>
                          </body>
                        </html>
                      `,
                    },
                    Text: {
                      Data: `Dear ${firstName} ${lastName},\n\nThank you for requesting a demo of our services. We have received your submission for ${businessType} business at ${website}.\n\nOur team will contact you shortly to schedule your personalized demo.\n\nBest regards,\nAdVantage AI Team`,
                    },
                  },
                  Subject: {
                    Data: "Your Demo Request Confirmation - AdVantage AI",
                  },
                },
                Source: senderEmail,
              });

              const result = await sesClient.send(command);
              logger.info(`Email sent successfully: ${JSON.stringify(result)}`);
            } catch (error) {
              logger.error("Error sending email:", error as Error);
              throw error;
            }
          }
        }
      }
    }
  } catch (error) {
    logger.error("Error in handler:", error as Error);
    throw error;
  }

  logger.info(`Successfully processed ${event.Records.length} records.`);
  return {
    batchItemFailures: [],
  };
};