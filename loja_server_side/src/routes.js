const express = require("express");
const user = require('./controllers/User')


const routes = express.Router();

routes.post("/api/login", user.login)

module.exports = routes;