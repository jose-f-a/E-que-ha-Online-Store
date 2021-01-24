const express = require("express");
const user = require("./controllers/User");
const produto = require("./controllers/Produto");
const carrinho = require("./controllers/Carrinho");
const compra = require("./controllers/Compra");
const analises = require("./controllers/analise");
const routes = express.Router();

routes.post("/api/signup", user.signup);
routes.post("/api/login", user.login);
routes.post("/api/sessionValidation", user.sessionValidation);
routes.get("/api/get-user-morada", user.getMoradas);

routes.get("/api/produto-por-id", produto.getArtigoById);
routes.post("/api/create-product", produto.createProduct);
routes.get("/api/getArtigo", produto.getArtigo);
routes.post("/api/get-artigos-actuais", produto.getArtigosAtualizados);
routes.get("/api/get-last-review", produto.getLastReview);
routes.get("/api/get-artigos-query", produto.getArtigoByQuery);
routes.get("/api/get-artigos-categoria", produto.getArtigoByCategoria);
routes.get("/api/getArtigosMelhorRating", produto.getArtigoMelhorRating);

routes.post("/api/set-carrinho", carrinho.setCarrinho);
routes.get("/api/get-carrinho", carrinho.getCarrinho);

routes.post("/api/comprar", compra.fazerCompra);
routes.post("/api/getFinishedCompras", compra.getFinishedCompras);
routes.post("/api/getPendingCompras", compra.getPendingCompras);
routes.get("/api/get-last-compra", compra.getLastCompras);
routes.post("/api/get-compras-last-month", compra.getComprasLastCompras);

routes.post("/api/createAnalise", analises.fazerReview);
routes.get("/api/get-review-byid", analises.getReviewById);

module.exports = routes;
