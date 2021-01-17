const express = require('express');
const routes = require('./routes');
const cors = require('cors');
require('./database');
require('dotenv').config();
require("./database");
const app = express();
app.use(cors());
//Serve para lidar com json
app.use(express.json());
//Adiciona as rotas
app.use(routes);

//porta do server
let port = process.env.API_PORT;
app.listen(port);
console.log("Server listening on port: " + port);