const express = require('express')
const router = express.Router()

const { healthCheckController, getPersonajes, getPeliculas } = require('../controllers/getControllers')


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

module.exports = router