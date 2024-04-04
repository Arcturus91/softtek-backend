export type SwapiPerson = {
    starships: string[];
    edited: string;
    name: string;
    created: string;
    url: string;
    gender: string;
    vehicles: string[];
    skin_color: string;
    hair_color: string;
    height: string;
    eye_color: string;
    mass: string;
    films: string[];
    species: string[];
    homeworld: string;
    birth_year: string;
}

export type SofttekPerson = {
    navesEstelares: string[];
    editado: string;
    nombre: string;
    creado: string;
    url: string;
    genero: string;
    vehiculos: string[];
    colorPiel: string;
    colorCabello: string;
    altura: string;
    colorOjos: string;
    masa: string;
    peliculas: string[];
    especies: string[];
    mundoNatal: string;
    anhoNacimiento: string;
}

export type SwapiFilm = {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    species: string[];
    starships: string[];
    vehicles: string[];
    characters: string[];
    planets: string[];
    url: string;
    created: string;
    edited: string;
}

export type SofttekFilm = {
    titulo: string;
    numeroEpisodio: number;
    textoApertura: string;
    director: string;
    productor: string;
    fechaLanzamiento: string;
    especies: string[];
    navesEstelares: string[];
    vehiculos: string[];
    personajes: string[];
    planetas: string[];
    url: string;
    creado: string;
    editado: string;
}