require("dotenv").config();
const connection = require("../database");

module.exports = {
    async fazerReview(req, res) {
        const { user, desc, rating, produtoid } = req.body
        await connection
            .query(
                "INSERT into review(titulo,descricao,rating,_data,produtoid) values(:titulo,:descricao,:rating,:data,:produtoid);", {
                    replacements: {
                        titulo: user,
                        descricao: desc,
                        rating: rating,
                        produtoid: produtoid,
                        data: new Date(),
                    }
                }
            )
            .then((results) => {

                return res.json({ mensagem: "sucesso" })
            });

    },

    async getReviewById(req, res) {
        const { produtoid } = req.query
        console.log('-----------------------')
        console.log(produtoid)
        await connection
            .query(
                "select * from review where produtoid=:produtoid;", {
                    replacements: {
                        produtoid: produtoid,
                    }
                }
            )
            .then((results) => {

                return res.json(results[0])
            });

    }
}