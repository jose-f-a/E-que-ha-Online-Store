require("dotenv").config();
const connection = require("../database");

module.exports = {
    async getCarrinho(req, res) {
        const { userid } = req.query
        var carrinhoid;
        var produtosIni;
        //Ir buscar o id do carrinho
        console.log('GetCarrinho')
            //se não tiver carrinho retornar vazio
        await connection.query("Select * from carrinho where userid =:id ", {
            replacements: { id: userid }
        }).then(results => {

            if (results[0].length > 0) {
                carrinhoid = results[0][0].carrinhoid
            }
        });

        if (carrinhoid) {
            //Ir buscar todas as linhas
            await connection.query("Select * from linhaCarrinho where carrinhoid =:id ", {
                replacements: { id: carrinhoid }
            }).then(results => {

                if (results[0].length > 0) {
                    produtosIni = results[0]

                } else {
                    console.log([])
                    return res.json({
                        produtos: []
                    })
                }
            });
            //Procurar pelos produtos
            var produtosFinal = [];
            if (produtosIni && produtosIni.length > 0) {
                await Promise.all(await produtosIni.map(async(produto) => {

                    await connection.query("SELECT * FROM produto where produtoid = :id;", {
                        replacements: {
                            id: produto.produtoid,
                        }
                    }).then(results => {
                        var aux = []

                        json_ = {
                            produtoid: parseInt(produto.produtoid),
                            quantidade: parseInt(produto.quantidade),
                            preco: parseFloat(results[0][0].preco),
                            nome: results[0][0].nome.split('-')[0],
                        }
                        produtosFinal.push(json_)

                    })

                }))
                console.log(produtosFinal)
                return res.json({
                    produtos: produtosFinal
                })
            }


        } else {
            /* [
  { produtoid: 16, quantidade: 13, preco: '9', nome: 'VÅGSJÖN-Branco' },
  { produtoid: 18, quantidade: 8, preco: '9', nome: 'VÅGSJÖN-Cinza' },
  { produtoid: 19, quantidade: 8, preco: '9', nome: 'VÅGSJÖN-Roxo' }
] */
            //se nao tiver linhas retornar vazio
            console.log([])
            return res.json({
                produtos: []
            })
        }
    },

    async setCarrinho(req, res) {
        const { userid, produtos } = req.body
        console.log('Set Carrinho')
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
                        produtoid: parseInt(produto.produtoid),
                        qtd: parseInt(produto.quantidade)
                    }
                }).then(results => {

                })
            });
            console.log(produtos)
            return res.json({ msg: "adicionou" })

        } else {

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
            }

            return res.json({ msg: "bd ficou vazia" })
        }



    },
}