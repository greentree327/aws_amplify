// Import the function definition utility from Amplify backend SDK
import { defineFunction } from '@aws-amplify/backend';

// Define and export the Lambda function
const demoNotification = defineFunction({
  name: 'demoNotification',
  entry: './handler.ts',
});

export { demoNotification };
// Make it the default export as well to ensure compatibility
export default demoNotification;