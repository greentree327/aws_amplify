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

// Create an IAM policy that allows our Lambda function to read from DynamoDB streams
const policy = new Policy(
  Stack.of(demoTable),
  "DemoNotificationStreamingPolicy",
  {
    statements: [
      new PolicyStatement({
        effect: Effect.ALLOW,
        // Permissions needed to read from DynamoDB streams
        actions: [
          "dynamodb:DescribeStream",    // Describe the stream
          "dynamodb:GetRecords",        // Get records from the stream
          "dynamodb:GetShardIterator",  // Get iterator for reading stream
          "dynamodb:ListStreams"        // List available streams
        ],
        resources: ["*"]  // Allow access to all streams (could be restricted to specific ARNs)
      })
    ]
  }
);

// Attach the streaming policy to our Lambda function's role
backend.demoNotification.resources.lambda.role?.attachInlinePolicy(policy);

// Create an event source mapping to connect the DynamoDB stream to our Lambda function
const mapping = new EventSourceMapping(
  Stack.of(demoTable),
  "DemoNotificationEventStreamMapping",
  {
    target: backend.demoNotification.resources.lambda,  // Our Lambda function
    eventSourceArn: demoTable.tableStreamArn,          // The stream to read from
    startingPosition: StartingPosition.LATEST,         // Start reading from latest records
  }
);

// Ensure the policy is created before the event source mapping
mapping.node.addDependency(policy);
