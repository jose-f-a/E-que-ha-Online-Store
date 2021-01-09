const express = require("express");
const user = require('./controllers/User')
const produto = require("./controllers/Produto")
const carrinho = require("./controllers/Carrinho")
const routes = express.Router();

routes.post("/api/signup", user.signup)
routes.post("/api/login", user.login)
routes.post("/api/sessionValidation", user.sessionValidation)
routes.get("/api/produto-por-id", produto.getArtigoById)
routes.post("/api/set-carrinho", carrinho.setCarrinho)
routes.get("/api/get-carrinho", carrinho.getCarrinho)
module.exports = routes;