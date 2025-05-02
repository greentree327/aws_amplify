import { DynamoDBStreamEvent } from 'aws-lambda';

export const handler = async (event: DynamoDBStreamEvent) => {
    return "Hello from my first function!";
}