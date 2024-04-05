import { Request, Response } from 'express';
import { swapiApiPeopleTransformer, swapiApiFilmsTransformer } from '../utils/utils';
const axios = require("axios");
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
  DynamoDBDocumentClient,
  GetCommand,
} = require("@aws-sdk/lib-dynamodb");
const client = new DynamoDBClient();
const dynamoDbClient = DynamoDBDocumentClient.from(client);
const SOFTTEK_SWAPI_TABLE = process.env.SOFTTEK_SWAPI_TABLE;

const healthCheckController = async (req: Request, res: Response): Promise<void> => {
  res.send({ message: 'health check' });
}

const getPersonajes = async (req: Request, res: Response): Promise<void> => {
  try {
    const { data } = await axios.get("https://swapi.py4e.com/api/people");
    const swapiPeopleArray = data.results;
    const transformedArray = swapiApiPeopleTransformer(swapiPeopleArray);
    res.send(transformedArray);
  } catch (error) {
    console.error("Error while getting data from SWAPI:", error);
    res.status(500).send({ error: "Failed to get people" });
  }
}

const getPeliculas = async (req: Request, res: Response): Promise<void> => {
  try {
    const { data } = await axios.get("https://swapi.py4e.com/api/films");
    const swapiFilmsArray = data.results;
    const transformedArray = swapiApiFilmsTransformer(swapiFilmsArray);
    res.send(transformedArray);
  } catch (error) {
    console.error("Error while getting data from SWAPI:", error);
    res.status(500).send({ error: "Failed to get films" });
  }

}

const getPersonajeByName = async (req: Request, res: Response): Promise<void> => {
  const params = {
    TableName: SOFTTEK_SWAPI_TABLE,
    Key: {
      nombre: req.params.nombre,
    },
  };

  try {
    const { Item } = await dynamoDbClient.send(new GetCommand(params));
    if (Item) {
      const softtekPerson = Item;
      res.json(softtekPerson);
    } else {
      res
        .status(404)
        .json({ error: 'No se pudo encontrar personaje con el nombre indicado' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not retreive personaje" });
  }
}

module.exports = { healthCheckController, getPersonajes, getPeliculas, getPersonajeByName }