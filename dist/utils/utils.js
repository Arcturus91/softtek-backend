"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swapiApiFilmsTransformer = exports.swapiApiPeopleTransformer = void 0;
const swapiApiPeopleTransformer = (swapiPeopleArray) => {
    return swapiPeopleArray.map((item) => {
        const translatedItem = {
            nombre: item.name,
            altura: item.height,
            masa: item.mass,
            colorCabello: item.hair_color,
            colorPiel: item.skin_color,
            colorOjos: item.eye_color,
            anhoNacimiento: item.birth_year,
            genero: item.gender,
            mundoNatal: item.homeworld,
            peliculas: item.films,
            especies: item.species,
            vehiculos: item.vehicles,
            navesEstelares: item.starships,
            creado: item.created,
            editado: item.edited,
            url: item.url,
        };
        return translatedItem;
    });
};
exports.swapiApiPeopleTransformer = swapiApiPeopleTransformer;
const swapiApiFilmsTransformer = (swapiFilmsArray) => {
    return swapiFilmsArray.map((item) => {
        const translatedItem = {
            titulo: item.title,
            numeroEpisodio: item.episode_id,
            textoApertura: item.opening_crawl,
            director: item.director,
            productor: item.producer,
            fechaLanzamiento: item.release_date,
            especies: item.species,
            navesEstelares: item.starships,
            vehiculos: item.vehicles,
            personajes: item.characters,
            planetas: item.planets,
            url: item.url,
            creado: item.created,
            editado: item.edited,
        };
        return translatedItem;
    });
};
exports.swapiApiFilmsTransformer = swapiApiFilmsTransformer;
