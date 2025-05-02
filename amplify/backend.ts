import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { demoNotification } from './functions/demoNotification/resource';

defineBackend({
  auth,
  data,
  demoNotification
});
