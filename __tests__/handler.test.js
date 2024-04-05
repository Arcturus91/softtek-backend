const { handler } = require("../dist/index");

jest.mock("@aws-sdk/client-dynamodb", () => {
  return {
    DynamoDBClient: jest.fn(() => ({})),
  };
});

jest.mock("@aws-sdk/lib-dynamodb", () => {
  return {
    DynamoDBDocumentClient: {
      from: jest.fn(() => ({})),
    },
    GetCommand: jest.fn(),
  };
});

describe("Verifica que el API está operacional", () => {
  it("Debería retornar un status 200", async () => {
    const event = {
      httpMethod: "GET",
      path: "/api/",
      headers: {},
      body: null,
    };

    const expectedResponse = {
      statusCode: 200,
      body: JSON.stringify({
        message: "health check",
      }),
    };

    const result = await handler(event);

    const resultBody = JSON.parse(result.body);

    expect(result.statusCode).toEqual(expectedResponse.statusCode);
    expect(resultBody).toEqual(JSON.parse(expectedResponse.body));
  });
});
