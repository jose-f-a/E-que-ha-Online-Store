const express = require("express");
const teste = require('./controllers/teste')


const routes = express.Router();

routes.get("/teste", teste.a)

module.exports = routes;