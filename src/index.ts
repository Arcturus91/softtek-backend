/* const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
} = require("@aws-sdk/lib-dynamodb"); */
const express = require("express");
import { Request, Response } from 'express';
import { SofttekPerson } from './types/types';
const serverless = require("serverless-http");
const app = express();
const router = require('./routes/router')

const SOFTTEK_SWAPI_TABLE = process.env.SOFTTEK_SWAPI_TABLE;
/* const client = new DynamoDBClient();
const dynamoDbClient = DynamoDBDocumentClient.from(client); */

const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

// Serve Swagger documentation
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use(express.json());

app.use('/api', router)

app.get("/users/:userId", async function (req: Request, res: Response) {
  const params = {
    TableName: SOFTTEK_SWAPI_TABLE,
    Key: {
      userId: req.params.userId,
    },
  };

  /*   try {
      const { Item } = await dynamoDbClient.send(new GetCommand(params));
      if (Item) {
        const { userId, name } = Item;
        res.json({ userId, name });
      } else {
        res
          .status(404)
          .json({ error: 'Could not find user with provided "userId"' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Could not retreive user" });
    } */
});

app.post("/api/personajes", async function (req: Request, res: Response) {
  const softtekPerson: SofttekPerson = req.body;
  if (typeof softtekPerson.nombre !== "string") {
    res.status(400).json({ error: '"nombre" must be a string' });
  }
  console.log('softek person:', softtekPerson)
  const params = {
    TableName: SOFTTEK_SWAPI_TABLE,
    Item: {
      ...softtekPerson
    },
  };

  /*   try {
      await dynamoDbClient.send(new PutCommand(params));
      res.json(softtekPerson);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Could not create user" });
    } */
});

app.use((req: Request, res: Response) => {
  return res.status(404).json({
    error: "Not Found",
  });
});


app.listen(3000, () => {
  console.log('listening in port 3000')
})

module.exports.handler = serverless(app);
