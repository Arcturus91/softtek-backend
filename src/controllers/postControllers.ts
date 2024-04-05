import { Request, Response } from 'express';
import { SofttekPerson } from '../types/types';
const axios = require("axios");

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
    DynamoDBDocumentClient,
    PutCommand,
} = require("@aws-sdk/lib-dynamodb");

const SOFTTEK_SWAPI_TABLE = process.env.SOFTTEK_SWAPI_TABLE;
const client = new DynamoDBClient();
const dynamoDbClient = DynamoDBDocumentClient.from(client);

const postPersonaje = async (req: Request, res: Response): Promise<void> => {
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

    try {
        await dynamoDbClient.send(new PutCommand(params));
        res.json(softtekPerson);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Could not create user" });
    }
}


module.exports = { postPersonaje }





