
const express = require("express");
import { Request, Response } from 'express';

const serverless = require("serverless-http");
const app = express();
const router = require('./routes/router')



const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use(express.json());

app.use('/api', router)

app.use((req: Request, res: Response) => {
  return res.redirect('/api-docs');
});


app.listen(3000, () => {
  console.log('listening in port 3000')
})

module.exports.handler = serverless(app);
