require("dotenv").config();
const connection = require("../database");

module.exports = {
  async getArtigo(req, res) {
    try {
      await connection.query("Select produtoid, nome, preco, descricao from produto").then((results) => {
        console.log(results);
        return res.json(results[0])
      });
    } catch (error) {
      console.log(error);
    }
  },
};

// Select produto.produtoid, nome, preco, produto.descricao, avg(rating)
// 	from produto, review
// 	where produto.produtoid = review.produtoid
// 	group by produto.produtoid