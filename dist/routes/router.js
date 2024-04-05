"use strict";
const express = require('express');
const router = express.Router();
const { healthCheckController, getPersonajes, getPeliculas, getPersonajeByName } = require('../controllers/getControllers');
const { postPersonaje } = require('../controllers/postControllers');
/**
 * @swagger
 * /api/:
 *   get:
 *     summary: Health Check
 *     description: Verifica que el API esté operativa
 *     responses:
 *       200:
 *         description: Incluye un mensaje que indica que el API está operativa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *               example:
 *                 message: "health check"
 */
router.get("/", healthCheckController);
/**
 * @swagger
 * /api/personajes:
 *   get:
 *     summary: Personajes de Star Wars
 *     description: Retorna una lista de personajes de Star Wars con sus nombres en español
 *     responses:
 *       200:
 *         description: Retorna una lista de personajes de Star Wars con sus nombres en español
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   nombre:
 *                     type: string
 *                     description: Nombre del personaje
 *                   altura:
 *                     type: string
 *                     description: Altura del personaje.
 *                   masa:
 *                     type: string
 *                     description: Peso del personaje.
 *                   colorCabello:
 *                     type: string
 *                     description: Cabello color del personaje.
 *                   colorPiel:
 *                     type: string
 *                     description: Piel color del personaje.
 *                   colorOjos:
 *                     type: string
 *                     description: Color de ojos del personaje.
 *                   anhoNacimiento:
 *                     type: string
 *                     description: Año de nacimiento del personaje.
 *                   genero:
 *                     type: string
 *                     description: Genero del personaje.
 *                   mundoNatal:
 *                     type: string
 *                     description: Mundo natal del personaje.
 *                   peliculas:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: Películas donde el personaje aparece.
 *                   especies:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: Especies del personaje.
 *                   vehiculos:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: Vehículos manejados por el personaje.
 *                   navesEstelares:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: Naves pilotadas por el personaje.
 *                   creado:
 *                     type: string
 *                     format: date-time
 *                     description: Fecha de creación del registro del personaje.
 *                   editado:
 *                     type: string
 *                     format: date-time
 *                     description: Fecha de edición del registro del personaje.
 *                   url:
 *                     type: string
 *                     description: URL del personaje.
 */
router.get("/personajes", getPersonajes);
/**
 * @swagger
 * /api/peliculas:
 *   get:
 *     summary: Films de Star Wars
 *     description: Retorna la lista de films de Stars Wars formateada al español
 *     responses:
 *       200:
 *         description: Retorna la lista de films de Stars Wars formateada al español
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   titulo:
 *                     type: string
 *                     description: Título de la película.
 *                   numeroEpisodio:
 *                     type: integer
 *                     description: Número de episodio de la película.
 *                   textoApertura:
 *                     type: string
 *                     description: Texto de apertura de la película.
 *                   director:
 *                     type: string
 *                     description: Director de la película.
 *                   productor:
 *                     type: string
 *                     description: Productor de la película.
 *                   fechaLanzamiento:
 *                     type: string
 *                     format: date
 *                     description: Fecha de estreno de la película.
 *                   especies:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: Lista de especies URLs que aparecen en la película.
 *                   navesEstelares:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: List de naves URLs que aparecen en la película.
 *                   vehiculos:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: Lista de vehículos URLs que aparecen en la película.
 *                   personajes:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: Lista de personajes URLs que aparecen en la película.
 *                   planetas:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: Lista de planetas URLs que aparecen en la película.
 *                   url:
 *                     type: string
 *                     description: URL de la película.
 *                   creado:
 *                     type: string
 *                     format: date-time
 *                     description: Fecha de creación de la película.
 *                   editado:
 *                     type: string
 *                     format: date-time
 *                     description: Fecha de edición de la película.
 */
router.get("/peliculas", getPeliculas);
/**
 * @swagger
 * paths:
 *   /api/personajes/{nombre}:
 *     get:
 *       summary: Retorna una personaje de Star Wars dado su nombre
 *       description: Retorna una personaje de Star Wars dado su nombre desde la base de datos
 *       parameters:
 *         - in: path
 *           name: nombre
 *           required: true
 *           schema:
 *             type: string
 *           description: El nombre del personaje a retornar(Colocar exactamente el nombre).
 *       responses:
 *         200:
 *           description: Detalles del personaje requerido.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/SofttekPerson'
 *         404:
 *           description: Personaje no encontrado.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     example: 'No se pudo encontrar personaje con el nombre indicado'
 *         500:
 *           description: Error en el servidor, no se puede devolver el personaje buscado.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     example: 'No se puede devolver el personaje buscado'
 * components:
 *   schemas:
 *     SofttekPerson:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *         altura:
 *           type: string
 *         masa:
 *           type: string
 *         colorCabello:
 *           type: string
 *         colorPiel:
 *           type: string
 *         colorOjos:
 *           type: string
 *         anhoNacimiento:
 *           type: string
 *         genero:
 *           type: string
 *         mundoNatal:
 *           type: string
 *         peliculas:
 *           type: array
 *           items:
 *             type: string
 *         especies:
 *           type: array
 *           items:
 *             type: string
 *         vehiculos:
 *           type: array
 *           items:
 *             type: string
 *         navesEstelares:
 *           type: array
 *           items:
 *             type: string
 *         creado:
 *           type: string
 *           format: date-time
 *         editado:
 *           type: string
 *           format: date-time
 *         url:
 *           type: string
 */
router.get("/personajes/:nombre", getPersonajeByName);
/**
 * @swagger
 * paths:
 *   /api/personajes:
 *     post:
 *       summary: Crea un nuevo personaje de StarWars (evita usar espacios)
 *       description: Crea un nuevo personaje de StarWars em la base de datos DynamoDB
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - nombre
 *                 - creado
 *                 - editado
 *                 - navesEstelares
 *                 - url
 *                 - genero
 *                 - vehiculos
 *                 - colorPiel
 *                 - colorCabello
 *                 - altura
 *                 - colorOjos
 *                 - masa
 *                 - peliculas
 *                 - especies
 *                 - mundoNatal
 *                 - anhoNacimiento
 *               properties:
 *                 nombre:
 *                   type: string
 *                   description: Nombre del personaje.
 *                 altura:
 *                   type: string
 *                   description: Altura del personaje in centimeters.
 *                 masa:
 *                   type: string
 *                   description: Peso del personaje in kilograms.
 *                 colorCabello:
 *                   type: string
 *                   description: Color de cabello del personaje.
 *                 colorPiel:
 *                   type: string
 *                   description: Color de piel del personaje.
 *                 colorOjos:
 *                   type: string
 *                   description: Color de ojos del personaje.
 *                 anhoNacimiento:
 *                   type: string
 *                   description: Año de nacimiento del personaje.
 *                 genero:
 *                   type: string
 *                   description: Genero del personaje.
 *                 mundoNatal:
 *                   type: string
 *                   description: URL del mundo natal del personaje.
 *                 peliculas:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: Lista de URLs de films en el que el personaje aparece.
 *                 especies:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: List of URLs de las especies del personaje.
 *                 vehiculos:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: List of URLs de las vehiculos driven by el personaje.
 *                 navesEstelares:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: List of URLs de las naves piloted by el personaje.
 *                 creado:
 *                   type: string
 *                   format: date-time
 *                   description: Fecha de creación del personaje.
 *                 editado:
 *                   type: string
 *                   format: date-time
 *                   description: Fecha de edición del personaje.
 *                 url:
 *                   type: string
 *                   description: URL del personaje.
 *       responses:
 *         200:
 *           description: Character entry created successfully.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/SofttekPerson'
 *         400:
 *           description: Invalid request data.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     example: '"nombre" must be a string'
 *         500:
 *           description: Server error, could not create el personaje entry.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     example: 'Could not create user'
 * components:
 *   schemas:
 *     SofttekPerson:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *         altura:
 *           type: string
 *         masa:
 *           type: string
 *         colorCabello:
 *           type: string
 *         colorPiel:
 *           type: string
 *         colorOjos:
 *           type: string
 *         anhoNacimiento:
 *           type: string
 *         genero:
 *           type: string
 *         mundoNatal:
 *           type: string
 *         peliculas:
 *           type: array
 *           items:
 *             type: string
 *         especies:
 *           type: array
 *           items:
 *             type: string
 *         vehiculos:
 *           type: array
 *           items:
 *             type: string
 *         navesEstelares:
 *           type: array
 *           items:
 *             type: string
 *         creado:
 *           type: string
 *           format: date-time
 *         editado:
 *           type: string
 *           format: date-time
 *         url:
 *           type: string
 */
router.post("/personajes", postPersonaje);
module.exports = router;
