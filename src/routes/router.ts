const express = require('express')
const axios = require("axios");
import { Request, Response } from 'express';
import { swapiApiPeopleTransformer, swapiApiFilmsTransformer } from '../utils/utils';
const router = express.Router()

router.get("/personajes", async (req: Request, res: Response) => {
    const { data } = await axios.get("https://swapi.py4e.com/api/people");
    const swapiPeopleArray = data.results;
    const transformedArray = swapiApiPeopleTransformer(swapiPeopleArray);
    console.log("people!!!!", transformedArray);
    res.send({ transformedArray });
});

router.get("/peliculas", async (req: Request, res: Response) => {
    const { data } = await axios.get("https://swapi.py4e.com/api/films");
    const swapiFilmsArray = data.results;
    const transformedArray = swapiApiFilmsTransformer(swapiFilmsArray);
    console.log("films!!!!", transformedArray);
    res.send({ transformedArray });
});

module.exports = router