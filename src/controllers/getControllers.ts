import { Request, Response } from 'express';
const axios = require("axios");
import { swapiApiPeopleTransformer, swapiApiFilmsTransformer } from '../utils/utils';


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
    const { data } = await axios.get("https://swapi.py4e.com/api/films");
    const swapiFilmsArray = data.results;
    const transformedArray = swapiApiFilmsTransformer(swapiFilmsArray);
    console.log("films!!!!", transformedArray);
    res.send(transformedArray);
}

module.exports = { healthCheckController, getPersonajes, getPeliculas }