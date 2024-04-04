"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/* const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
} = require("@aws-sdk/lib-dynamodb"); */
const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = require('./routes/router');
const SOFTTEK_SWAPI_TABLE = process.env.SOFTTEK_SWAPI_TABLE;
/* const client = new DynamoDBClient();
const dynamoDbClient = DynamoDBDocumentClient.from(client); */
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
// Serve Swagger documentation
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use(express.json());
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Returns a list of users
 *     description: Get a list of all users.
 *     responses:
 *       200:
 *         description: A JSON array of user names
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */
app.get("/", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.send("health check");
    });
});
app.use('/api', router);
app.get("/users/:userId", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
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
});
app.post("/api/personajes", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const softtekPerson = req.body;
        if (typeof softtekPerson.nombre !== "string") {
            res.status(400).json({ error: '"nombre" must be a string' });
        }
        console.log('softek person:', softtekPerson);
        const params = {
            TableName: SOFTTEK_SWAPI_TABLE,
            Item: Object.assign({}, softtekPerson),
        };
        /*   try {
            await dynamoDbClient.send(new PutCommand(params));
            res.json(softtekPerson);
          } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Could not create user" });
          } */
    });
});
app.use((req, res) => {
    return res.status(404).json({
        error: "Not Found",
    });
});
app.listen(3000, () => {
    console.log('listening in port 3000');
});
module.exports.handler = serverless(app);
