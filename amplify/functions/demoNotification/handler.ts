import { DynamoDBStreamEvent } from 'aws-lambda';
import type { DynamoDBStreamHandler } from "aws-lambda";
import { Logger } from "@aws-lambda-powertools/logger";
import { SES } from "@aws-sdk/client-ses";

const logger = new Logger({
  logLevel: "INFO",
  serviceName: "dynamodb-stream-handler",
});

const ses = new SES({ region: 'ap-southeast-2' });

export const handler: DynamoDBStreamHandler = async (event) => {
  logger.info("Starting to process records");
  
  for (const record of event.Records) {
    logger.info(`Processing record: ${record.eventID}`);
    logger.info(`Event Type: ${record.eventName}`);
    if (record.eventName === "INSERT") {
      // Get the new record data
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
            const params = {
              Destination: {
                ToAddresses: [email],
              },
              Message: {
                Body: {
                  Text: {
                    Data: `Dear ${firstName} ${lastName},\n\nThank you for requesting a demo of our services. We have received your submission for ${businessType} business at ${website}.\n\nOur team will contact you shortly to schedule your personalized demo.\n\nBest regards,\nAdVantage AI Team`,
                  },
                },
                Subject: {
                  Data: "Your Demo Request Confirmation - AdVantage AI",
                },
              },
              Source: "evoncapitalorg@gmail.com", // Replace with your SES verified email
            };
            const result = await ses.sendEmail(params);
            logger.info(`Email sent successfully: ${JSON.stringify(result)}`);
          } catch (error) {
            logger.error("Error sending email:", error as Error);
          }
        }
      }
    }
  }
  logger.info(`Successfully processed ${event.Records.length} records.`);
  return {
    batchItemFailures: [],
  };
};