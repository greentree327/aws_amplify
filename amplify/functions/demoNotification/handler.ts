import { DynamoDBStreamEvent } from 'aws-lambda';
import type { DynamoDBStreamHandler } from "aws-lambda";
import { Logger } from "@aws-lambda-powertools/logger";
import * as nodemailer from 'nodemailer';
import { SES } from "@aws-sdk/client-ses";

const logger = new Logger({
  logLevel: "INFO",
  serviceName: "dynamodb-stream-handler",
});

const ses = new SES({ region: 'ap-southeast-1' });
const transporter = nodemailer.createTransport({
  SES: { ses, aws: { region: 'ap-southeast-1' } },
});

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
            const mailOptions = {
              from: 'evoncapitalorg@gmail.com',
              to: email,
              subject: 'Your Demo Request Confirmation - AdVantage AI',
              text: `Dear ${firstName} ${lastName},\n\nThank you for requesting a demo of our services. We have received your submission for ${businessType} business at ${website}.\n\nOur team will contact you shortly to schedule your personalized demo.\n\nBest regards,\nAdVantage AI Team`
            };

            const result = await transporter.sendMail(mailOptions);
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