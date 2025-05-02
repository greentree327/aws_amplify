// Import the function definition utility from Amplify backend SDK
import { defineFunction } from '@aws-amplify/backend';

// Define and export a Lambda function named 'demoNotification'
export const demoNotification = defineFunction({
  // The name that will be used to identify this function in AWS
  name: 'demoNotification',
  
  // Path to the actual function implementation
  // This points to handler.ts in the same directory
  entry: './handler.ts'
});