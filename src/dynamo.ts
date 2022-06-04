import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const dynamoClient = new DynamoDBClient({
  credentials: {
    secretAccessKey: "root",
    accessKeyId: "root",
  },
  region: "us-east-1",
  ...(process.env.MOCK_DYNAMODB_ENDPOINT && {
    endpoint: process.env.MOCK_DYNAMODB_ENDPOINT,
    sslEnabled: false,
    region: "local",
  }),
});

export const client = DynamoDBDocumentClient.from(dynamoClient);
