import { SwapiPerson, SofttekPerson, SwapiFilm, SofttekFilm } from "../types/types";

export const swapiApiPeopleTransformer = (swapiPeopleArray: Array<SwapiPerson>): Array<SofttekPerson> => {

    return swapiPeopleArray.map((item: SwapiPerson) => {
        const translatedItem: SofttekPerson = {
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
}

export const swapiApiFilmsTransformer = (swapiFilmsArray: Array<SwapiFilm>): Array<SofttekFilm> => {

    return swapiFilmsArray.map((item: SwapiFilm) => {
        const translatedItem: SofttekFilm = {
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
}