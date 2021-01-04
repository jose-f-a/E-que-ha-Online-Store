const express = require("express");
const teste = require('./controllers/teste')
const user = require('./controllers/User')


const routes = express.Router();

routes.get("/teste", teste.a)
routes.post("/api/signup", user.signup)

module.exports = routes;