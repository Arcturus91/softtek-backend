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
const utils_1 = require("../utils/utils");
const axios = require("axios");
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, GetCommand, } = require("@aws-sdk/lib-dynamodb");
const client = new DynamoDBClient();
const dynamoDbClient = DynamoDBDocumentClient.from(client);
const SOFTTEK_SWAPI_TABLE = process.env.SOFTTEK_SWAPI_TABLE;
const healthCheckController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({ message: 'health check' });
});
const getPersonajes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield axios.get("https://swapi.py4e.com/api/people");
        const swapiPeopleArray = data.results;
        const transformedArray = (0, utils_1.swapiApiPeopleTransformer)(swapiPeopleArray);
        res.send(transformedArray);
    }
    catch (error) {
        console.error("Error while getting data from SWAPI:", error);
        res.status(500).send({ error: "Failed to get people" });
    }
});
const getPeliculas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield axios.get("https://swapi.py4e.com/api/films");
        const swapiFilmsArray = data.results;
        const transformedArray = (0, utils_1.swapiApiFilmsTransformer)(swapiFilmsArray);
        res.send(transformedArray);
    }
    catch (error) {
        console.error("Error while getting data from SWAPI:", error);
        res.status(500).send({ error: "Failed to get films" });
    }
});
const getPersonajeByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        TableName: SOFTTEK_SWAPI_TABLE,
        Key: {
            nombre: req.params.nombre,
        },
    };
    try {
        const { Item } = yield dynamoDbClient.send(new GetCommand(params));
        if (Item) {
            const softtekPerson = Item;
            res.json(softtekPerson);
        }
        else {
            res
                .status(404)
                .json({ error: 'No se pudo encontrar personaje con el nombre indicado' });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Could not retreive personaje" });
    }
});
module.exports = { healthCheckController, getPersonajes, getPeliculas, getPersonajeByName };
