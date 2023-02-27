import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({
  region: "sa-east-1",
});

export async function getUBICEEventsList() {
  const params = {
    TableName: "TABLE_NAME",
    Key: {
      KEY_NAME: { N: "KEY_VALUE" },
    },
    ProjectionExpression: "ATTRIBUTE_NAME",
  };

  const data = await client.send(new GetItemCommand(params));
  console.log("Success", data.Item);
  return data;
}
