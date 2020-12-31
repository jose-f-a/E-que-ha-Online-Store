const Sequlize = require("sequelize");
const dbConfig = require("../config/database");
const connection = new Sequlize(dbConfig);

module.exports = connection;