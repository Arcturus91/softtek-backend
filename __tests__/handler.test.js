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

const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");
const request = require("supertest");

const mock = new MockAdapter(axios);
const mockData = {
  results: [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male",
      homeworld: "http://swapi.py4e.com/api/planets/1/",
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      created: "2014-12-09T13:50:51.644000Z",
      edited: "2014-12-20T21:17:56.891000Z",
      url: "http://swapi.py4e.com/api/people/1/",
    },
  ],
};

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

beforeAll(() => {
  mock.onGet("https://swapi.py4e.com/api/people").reply(200, mockData);
});

afterAll(() => {
  mock.restore();
});

describe("Verifica el /api/personajes endpoint", () => {
  it("Debería obtener los personajes de SWAPI y traducir las propiedades", async () => {
    const event = {
      httpMethod: "GET",
      path: "/api/personajes",
      headers: {},
      body: null,
    };
    const response = await handler(event);

    const responseBody = JSON.parse(response.body);

    expect(response.statusCode).toBe(200);
    expect(responseBody).toEqual([
      {
        nombre: "Luke Skywalker",
        altura: "172",
        masa: "77",
        colorCabello: "blond",
        colorPiel: "fair",
        colorOjos: "blue",
        anhoNacimiento: "19BBY",
        genero: "male",
        mundoNatal: "http://swapi.py4e.com/api/planets/1/",
        peliculas: [],
        especies: [],
        vehiculos: [],
        navesEstelares: [],
        creado: "2014-12-09T13:50:51.644000Z",
        editado: "2014-12-20T21:17:56.891000Z",
        url: "http://swapi.py4e.com/api/people/1/",
      },
    ]);
  });
});
