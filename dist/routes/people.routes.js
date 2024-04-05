"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const axios = require("axios");
const utils_1 = require("../utils/utils");
const peopleRouter = express.Router();
peopleRouter.get("/personajes", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { data } = yield axios.get("https://swapi.py4e.com/api/people");
    const swapiPeopleArray = data.results;
    const transformedArray = (0, utils_1.swapiApiTransformer)(swapiPeopleArray);
    res.send({ transformedArray });
  })
);
module.exports = peopleRouter;
