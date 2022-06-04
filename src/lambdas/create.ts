import { APIGatewayProxyHandler } from "aws-lambda";
import { PutCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";
import { client } from "../dynamo";

export const handler: APIGatewayProxyHandler = async () => {
  try {
    const command = new PutCommand({
      TableName: "table",
      Item: { id: "12345" },
    });

    await client.send(command);

    const queryCommand = new QueryCommand({
      TableName: "table",
      KeyConditionExpression: "#id = :id",
      ExpressionAttributeNames: {
        "#id": "id",
      },
      ExpressionAttributeValues: {
        [":id"]: "12345",
      },
    });

    const x = await client.send(queryCommand);

    if (x.Items) {
      console.log("Items found", x.Items);
    } else {
      console.log("Nope", x);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ hello: "there" }),
    };
  } catch (err) {
    console.log(err);

    return {
      statusCode: 500,
      body: JSON.stringify({ msg: "Something went wrong" }),
    };
  }
};
