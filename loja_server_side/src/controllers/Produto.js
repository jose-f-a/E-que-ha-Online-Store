require("dotenv").config();
const connection = require("../database");

module.exports = {
  async getArtigo(req, res) {
    try {
      await connection.query("Select produtoid, nome, preco, descricao from produto").then((results) => {
        console.log(results);
        return res.json({
            message: results
        })
      });
    } catch (error) {
      console.log(error);
    }
  },
};
