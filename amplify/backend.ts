import { defineBackend } from '@aws-amplify/backend';
import { Stack } from 'aws-cdk-lib';
import { Policy, PolicyStatement, Effect } from 'aws-cdk-lib/aws-iam';
import { StartingPosition, EventSourceMapping } from 'aws-cdk-lib/aws-lambda';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { demoNotification } from './functions/demoNotification/resource';

const backend = defineBackend({
  auth,
  data,
  demoNotification
});

const todoTable = backend.data.resources.tables['Todo'];
const policy = new Policy(
  Stack.of(todoTable),
  'DemoNotificationStreamingPolicy',
  {
    statements: [
      new PolicyStatement({
        effect: Effect.ALLOW,
        actions: [
          'dynamodb:DescribeStream',
          'dynamodb:GetRecords',
          'dynamodb:GetShardIterator',
          'dynamodb:ListStreams'
        ],
        resources: ['*']
      })
    ]
  }
);
backend.demoNotification.resources.lambda.role?.attachInlinePolicy(policy);

const mapping = new EventSourceMapping(
  Stack.of(todoTable),
  'DemoNotificationTodoEventStreamMapping',
  {
    target: backend.demoNotification.resources.lambda,
    eventSourceArn: todoTable.tableStreamArn,
    startingPosition: StartingPosition.LATEST
  }
);

mapping.node.addDependency(policy);
