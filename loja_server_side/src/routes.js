const express = require("express");
const user = require('./controllers/User')
const produto = require("./controllers/Produto")
const routes = express.Router();

routes.post("/api/signup", user.signup)
routes.post("/api/login", user.login)
routes.post("/api/sessionValidation", user.sessionValidation)
routes.get("/api/produto-por-id", produto.getArtigoById)
module.exports = routes;