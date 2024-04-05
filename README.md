# SOFTTEK BACKEND TEST

Este proyecto sirve como backend para la aplicación Softtek, utilizando la arquitectura serverless de AWS. Está diseñado para interactuar con una tabla de DynamoDB.
El backend se construyoó utilizando Typescript, Node.js, Express, Swagger para la documentación de API, Jest para el unit testing y el serverless framework para despliegue en AWS.

## Características

- Crea y lee items en una base de datos de DynamoDB.
- Transforma un endpoint externo para retornar propiedades en español.
- Documentación API automatizada con Swagger.
- Implementación sin servidor en AWS

## Prerequisitos

Requerimientos previos:

- Node.js (version 18.x)
- AWS CLI, configurado con las credenciales adecuadas
- Serverless Framework.

## Instalación

1. Clone the repository:

```bash
git clone https://github.com/Arcturus91/softtek-backend.git
cd softtek-backend
```

2. Instala dependencias

```bash
npm install
```

3. Autenticación: Utiliza tus credenciales:

```bash
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
```

3. Despliegue: Utiliza el siguiente comando para levar la aplicación:

```bash
npm run deploy
```

4. Verifica las rutas provistas:
   [![BackEnd|](https://res.cloudinary.com/dad5dandd/image/upload/v1712333001/bpppqgaaeydbcdctgk2g.png)]()

## Documentación en Swagger:

1. Ve al siguiente enlace para ver la documentación en Swagger:

[Swagger endpoint](https://qbgn21yk42.execute-api.us-east-1.amazonaws.com/api-docs)

## Pruebas en Postman:

1. Get personajes Endpoint:

[Get personajes](https://qbgn21yk42.execute-api.us-east-1.amazonaws.com/api/personajes)

Resultado:
[![BackEnd|](https://res.cloudinary.com/dad5dandd/image/upload/v1712333703/qbszajxcno6bzcnsuqgp.png)]()

Resultado:

2. Post Personaje Endpoint
   [Post Personajes](https://qbgn21yk42.execute-api.us-east-1.amazonaws.com/api/personajes)

Resultado:
[![BackEnd|](https://res.cloudinary.com/dad5dandd/image/upload/v1712334293/xjgrgyuqjmtx5l9cvnrl.png)]()

3. Get Personaje agregado Endpoint

[Get Personaje agreado](https://qbgn21yk42.execute-api.us-east-1.amazonaws.com/api/personajes/Maria)

Resultado:
[![BackEnd|](https://res.cloudinary.com/dad5dandd/image/upload/v1712334484/boe5ej6dvlkkoi7bz0r1.png)]()

## Pruebas Unitarias

1. Utiliza jest y mocks para simular los servicios aws

```bash
npm run test
```

Resultado:
[![BackEnd|](https://res.cloudinary.com/dad5dandd/image/upload/v1712333386/ahgcng6pv6qwawuwzp36.png)]()
