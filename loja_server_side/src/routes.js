const express = require("express");
const user = require("./controllers/User");
const produto = require("./controllers/Produto");
const compra = require("./controllers/Compra");
const routes = express.Router();

routes.post("/api/signup", user.signup);
routes.post("/api/login", user.login);
routes.post("/api/sessionValidation", user.sessionValidation);
routes.get("/api/produto-por-id", produto.getArtigoById);
routes.get("/api/getArtigo", produto.getArtigo);
routes.get("/api/loadListaCompras", compra.getPendingCompras);
routes.post("/api/getFinishedCompras", compra.getFinishedCompras);
routes.post("/api/getPendingCompras", compra.getPendingCompras);

module.exports = routes;
