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
const axios = require("axios");
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand, } = require("@aws-sdk/lib-dynamodb");
const SOFTTEK_SWAPI_TABLE = process.env.SOFTTEK_SWAPI_TABLE;
const client = new DynamoDBClient();
const dynamoDbClient = DynamoDBDocumentClient.from(client);
const postPersonaje = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const softtekPerson = req.body;
    if (typeof softtekPerson.nombre !== "string") {
        res.status(400).json({ error: '"nombre" must be a string' });
    }
    console.log('softek person:', softtekPerson);
    const params = {
        TableName: SOFTTEK_SWAPI_TABLE,
        Item: Object.assign({}, softtekPerson),
    };
    try {
        yield dynamoDbClient.send(new PutCommand(params));
        res.json(softtekPerson);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Could not create user" });
    }
});
module.exports = { postPersonaje };
