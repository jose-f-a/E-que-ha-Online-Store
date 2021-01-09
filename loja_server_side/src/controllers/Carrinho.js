require("dotenv").config();
const connection = require("../database");

module.exports = {
    async getCarrinho(req, res) {
        const { userid } = req.query
        console.log(userid)
        return res.json({
            produtos: [
                { produtoid: 16, nome: 'EWQeqwe', quantidade: 9, preco: 10 },
                { produtoid: 17, nome: 'Weqw', quantidade: 10, preco: 10 },
                { produtoid: 18, nome: 'wqe', quantidade: 5, preco: 10 },
                { produtoid: 19, nome: 'eqwe', quantidade: 3, preco: 10 }
            ]
        })
    },

    async setCarrinho(req, res) {
        const { userid, produtos } = req.body
        console.log(req.body)
        var carrinhoid;
        if (produtos.length > 0) {
            //Procurar o carrinho do user**
            await connection.query("Select * from carrinho where userid =:id ", {
                replacements: { id: userid }
            }).then(results => {
                if (results[0].length > 0) {
                    carrinhoid = results[0][0].carrinhoid
                }
            });
            if (carrinhoid) {
                //Apagar as linhas todas desse linhacarrinho
                await connection.query("DELETE FROM linhacarrinho WHERE carrinhoid=:id ", {
                    replacements: { id: carrinhoid }
                }).then(results => {});
            } else {
                //criar carrinho existir
                await connection.query("INSERT INTO carrinho(descricao,userid) values('',:userid);", {
                    replacements: { userid: userid }
                }).then(results => {});
                await connection.query("Select * from carrinho where userid =:id ", {
                    replacements: { id: userid }
                }).then(results => {
                    if (results[0].length > 0) {
                        carrinhoid = results[0][0].carrinhoid
                    }
                });
            }

            //Criar linha carrinho com os produtos

            produtos.forEach(async(produto) => {

                await connection.query("INSERT INTO linhacarrinho(carrinhoid,produtoid,quantidade) values(:carrinhoid,:produtoid,:qtd);", {
                    replacements: {
                        carrinhoid: carrinhoid,
                        produtoid: produto.produtoid,
                        qtd: produto.quantidade
                    }
                }).then(results => {

                })
            });
            return res.json({ msg: "adicionou" })

        } else {
            return res.json({ msg: "nada a adicionar" })
        }



    },
}