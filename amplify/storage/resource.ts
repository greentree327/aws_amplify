import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'demoStorage',
  access: (allow) => ({
    'demo-submissions/*': [
      allow.authenticated.to(['read', 'write']),
      allow.guest.to(['write'])
    ],
  })
});