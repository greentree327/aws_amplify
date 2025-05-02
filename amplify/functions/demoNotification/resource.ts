import { defineFunction } from '@aws-amplify/backend';


export const demoNotification = defineFunction({
  name: 'demoNotification',
  entry: './handler.ts',

});