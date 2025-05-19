// Import core Amplify and AWS CDK libraries
import { defineBackend } from "@aws-amplify/backend";
import { Stack } from "aws-cdk-lib";
import { Policy, PolicyStatement, Effect } from "aws-cdk-lib/aws-iam";
import { StartingPosition, EventSourceMapping } from "aws-cdk-lib/aws-lambda";

// Import our resource configurations
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { demoNotification } from "./functions/demoNotification/resource";

// Define the backend with all our resources
const backend = defineBackend({
  auth,              // Authentication configuration
  data,              // Data models and API configuration
  demoNotification   // Lambda function for processing demo submissions
});

// Get reference to the DynamoDB table for Demo entries
const demoTable = backend.data.resources.tables["Demo"];

// Create IAM policies for DynamoDB streams and SES
const streamingPolicy = new Policy(
  Stack.of(demoTable),
  "DemoNotificationStreamingPolicy",
  {
    statements: [
      new PolicyStatement({
        effect: Effect.ALLOW,
        actions: [
          "dynamodb:DescribeStream",
          "dynamodb:GetRecords",
          "dynamodb:GetShardIterator",
          "dynamodb:ListStreams"
        ],
        resources: ["*"]
      })
    ]
  }
);

// Add full SES permissions
const sesPolicy = new Policy(
  Stack.of(demoTable),
  "DemoNotificationSESPolicy",
  {
    statements: [
      new PolicyStatement({
        effect: Effect.ALLOW,
        actions: [
          "ses:*" // Grant full SES permissions
        ],
        resources: ["*"]
      })
    ]
  }
);

// Attach both policies to our Lambda function's role
backend.demoNotification.resources.lambda.role?.attachInlinePolicy(streamingPolicy);
backend.demoNotification.resources.lambda.role?.attachInlinePolicy(sesPolicy);

// Create an event source mapping to connect the DynamoDB stream to our Lambda function
const mapping = new EventSourceMapping(
  Stack.of(demoTable),
  "DemoNotificationEventStreamMapping",
  {
    target: backend.demoNotification.resources.lambda,
    eventSourceArn: demoTable.tableStreamArn,
    startingPosition: StartingPosition.LATEST,
  }
);

// Ensure the policies are created before the event source mapping
mapping.node.addDependency(streamingPolicy);
mapping.node.addDependency(sesPolicy);
