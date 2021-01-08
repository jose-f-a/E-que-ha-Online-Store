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
    async getArtigoById(req, res) {
        try {
            const { id } = req.query
            var produto;
            var variantes;

            await connection.query("Select * from produto where produtoid =:id", {
                replacements: {
                    id: id
                }
            }).then((results) => {
                produto = results[0]

            });
            if (produto.length > 0) {
                const nomeProduto = produto[0].nome.split('-')[0]
                    //Existe produto, vai se buscar as variantes
                await connection.query("Select * from produto where nome like :nome and produtoid <> :id", {
                    replacements: {
                        id: id,
                        nome: nomeProduto + '%'
                    }
                }).then((results2) => {
                    variantes = results2[0]
                });

                if (variantes.length > 0) {
                    //existe variantes
                    //Get rating geral
                    //Fazer dinamincamnte a query e o replacenents
                    var query = "Select CAST(AVG(rating)AS DECIMAL(3,2))as review, count(*)total from review where produtoid =:idmain "

                    var replacements = { idmain: produto[0].produtoid }

                    for (var i = 0; i < variantes.length; i++) {
                        query = query + " or produtoid =:id" + i
                        replacements['id' + i] = variantes[i].produtoid
                    }
                    await connection.query(query, { replacements: replacements }).then((results3) => {

                        //Criar json com o produto e acrescentar ao rating o valor result3[0], e um array de variantes
                        var variantes2 = []
                        console.log(variantes[0].produtoid)
                        for (var i = 0; i < variantes.length; i++) {
                            var varianteNova = {};
                            query = query + " or produtoid =:id" + i
                            varianteNova.produtoid = variantes[i].produtoid
                            varianteNova.nome = variantes[i].nome.split('-')[0]
                            varianteNova.cor = variantes[i].nome.split('-')[1]
                            variantes2.push(varianteNova)
                        }
                        var resposta = {
                            produto: {
                                produtoid: produto[0].produtoid,
                                nome: nomeProduto,
                                cor: produto[0].nome.split('-')[1],
                                preco: produto[0].preco,
                                desconto: produto[0].desconto,
                                descricao: produto[0].descricao
                            },
                            rating: results3[0],
                            variantes: variantes2
                        }
                        return res.json(resposta)
                    });
                    //Vamos retornar os dados do produto com o rating geral, mais uma lista da variantes
                } else {
                    //nao existe variantes


                    //Vamos retornar os dados do produto com o rating geral

                }

            } else {
                return res.json({ mensagem: 'id not found' })
            }
        } catch (error) {
            console.log(error);
        }
    },
};

// Select produto.produtoid, nome, preco, produto.descricao, avg(rating)
// 	from produto, review
// 	where produto.produtoid = review.produtoid
// 	group by produto.produtoid