"use strict";
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "My API",
        version: "1.0.0",
        description: "My API Description",
    },
};
const options = {
    swaggerDefinition,
    apis: ["dist/routes/router.js"],
};
const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
