const connection = require("../database");
const sequelize = require("sequelize");
require("dotenv").config();
const KEY = process.env.KEY;

module.exports = {
    async fazerCompra(req, res) {
        const { userid, moradaid, pagamentoid, artigos } = req.body;
        var transacaoid;
        var compraid;
        var total = 0;

        console.log(moradaid);
        /*  ESTADOS DE COMPRA
              1-Pedido Recebido -> inicial
              2-Produtos Embalados
              3-Produtos Enviados
              4-Produtos Entregues
            */

        /*  ESTADO TRANSAÇÃO
              1-Confirmada
            */

        /*  Criar transação */
        await connection
            .query(
                "INSERT INTO transacao (criadoem,metodopagamentoid,estadotransacaoid) values(:data,:metodopagamentoid,:estadotransacaoid)RETURNING*;", {
                    replacements: {
                        data: new Date(),
                        metodopagamentoid: pagamentoid,
                        estadotransacaoid: 1,
                    },
                    type: sequelize.QueryTypes.INSERT,
                }
            )
            .then((results) => {
                transacaoid = results[0][0].transacaoid;
            });

        /*  Criar compra  */
        await connection
            .query(
                "INSERT INTO compra (userid,moradaid,estadocompraid,transacaoid,desconto,portes,total,criadaem) values(:userid,:moradaid,1,:transacaoid,:desconto,:portes,:total,:data)RETURNING*;", {
                    replacements: {
                        userid: userid,
                        moradaid: moradaid,
                        transacaoid: transacaoid,
                        desconto: 0,
                        portes: 1,
                        data: new Date(),
                        total: 2.0,
                    },
                }
            )
            .then((results) => {
                compraid = results[0][0].compraid;
            });

        /*  Criar linhas de compra  */
        await Promise.all(
            artigos.map(async(artigo) => {
                await connection
                    .query(
                        "INSERT INTO linhacompra(compraid,produtoid,quantidade,preco) values(:compraid,:produtoid,:quantidade,:preco)RETURNING*;", {
                            replacements: {
                                compraid: compraid,
                                produtoid: artigo.produtoid,
                                quantidade: artigo.quantidade,
                                preco: artigo.quantidade * artigo.preco,
                            },
                        }
                    )
                    .then((results) => {
                        total = total + parseFloat(results[0][0].preco);
                    });
            })
        );

        //return res.json({ total: total })
        console.log(total);

        /*  Update compra com o total */
        await connection
            .query(
                "UPDATE compra set total=:total where compraid=:compraid RETURNING*;", {
                    replacements: { compraid: compraid, total: total },
                }
            )
            .then((results) => {
                return res.json(results);
            });

        /*  Retornar id da compra ou a compra em si */
    },

    async getPendingCompras(req, res) {
        try {
            const { userid } = req.body;
            var compras = [];
            await connection
                .query(
                    "SELECT * FROM compra, utilizador WHERE compra.userid = utilizador.userid AND (compra.estadocompraid = 1 OR compra.estadocompraid = 2 OR compra.estadocompraid = 3) ORDER BY compraid DESC;", {
                        replacements: { userid: userid },
                    }
                )
                .then((results) => {
                    for (compra in results[0]) {
                        compras.push(results[0][compra]);
                    }
                });
            /* Tratamento dos dados */
            var json_final;
            var comprasFinais = [];
            var json_Morada;
            var json_pagamento;
            for (compra in compras) {
                //Ir buscar linha de produtos
                var produtos = [];
                await connection
                    .query(
                        "SELECT * FROM linhacompra, produto WHERE linhacompra.compraid = :compraid and linhacompra.produtoid=produto.produtoid;", {
                            replacements: { compraid: compras[compra].compraid },
                        }
                    )
                    .then((results) => {
                        for (produto in results[0]) {
                            json_produto = {
                                produtoid: results[0][produto].produtoid,
                                nome: results[0][produto].nome.split("-")[0],
                                cor: results[0][produto].nome.split("-")[0],
                                preco: results[0][produto].preco,
                                quantidade: results[0][produto].quantidade,
                                descricao: results[0][produto].descricao,
                                imagens: results[0][produto].imagens
                            };
                            produtos.push(json_produto);
                        }
                    });
                //Ir buscar morada
                await connection
                    .query("SELECT * FROM morada WHERE moradaid = :moradaid;", {
                        replacements: { moradaid: compras[compra].moradaid },
                    })
                    .then((results) => {
                        json_Morada = {
                            moradaid: results[0][0].moradaid,
                            rua: results[0][0].rua,
                            cidade: results[0][0].cidade,
                            codigo_postal: results[0][0].codigo_postal,
                            pais: results[0][0].pais,
                            descricao: results[0][0].descricao,
                        };
                    });

                /*
                await connection
                    .query(
                        "SELECT * FROM transacao,metodopagameto,estadotransacao WHERE transacao.transacaoid = :transacaoid and transacao.metopagamentoid = metodopagamento.metodopagamentoid and transacao.estadotransacaoid = estadotransacao.estadotransacaoid;", {
                            replacements: { transacaoid: compras[compra].transacaoid },
                        }
                    )
                    .then((results) => {
                        console.log(results[0])
                        json_pagamento = {
                            moradaid: results[0][0].moradaid,
                            rua: results[0][0].rua,
                            cidade: results[0][0].cidade,
                            codigo_postal: results[0][0].codigo_postal,
                            pais: results[0][0].pais,
                            descricao: results[0][0].des
                        }
                    }) 
                */

                json_compra = {
                    compraid: compras[compra].compraid,
                    criadaem: compras[compra].criadaem,
                    estadoCompra: compras[compra].estadocompraid,
                };
                json_final = {
                    compra: json_compra,
                    produtos: produtos,
                    morada: json_Morada,
                };

                comprasFinais.push(json_final);
            }

            return res.json(comprasFinais);
        } catch (error) {
            console.log(error);
        }
    },
    async getFinishedCompras(req, res) {
        try {
            const { userid } = req.body;
            var compras = [];
            await connection
                .query(
                    "SELECT * FROM compra, utilizador WHERE compra.estadocompraid = 4 AND compra.userid = utilizador.userid ORDER BY compraid DESC", {
                        replacements: { userid: userid },
                    }
                )
                .then((results) => {
                    for (compra in results[0]) {
                        compras.push(results[0][compra]);
                    }
                });

            /* Tratamento dos dados */
            var json_final;
            var comprasFinais = [];
            var json_Morada;
            var json_pagamento;

            for (compra in compras) {
                //Ir buscar linha de produtos
                var produtos = [];
                await connection
                    .query(
                        "SELECT * FROM linhacompra, produto WHERE linhacompra.compraid = :compraid and linhacompra.produtoid=produto.produtoid;", {
                            replacements: { compraid: compras[compra].compraid },
                        }
                    )
                    .then((results) => {
                        for (produto in results[0]) {
                            json_produto = {
                                produtoid: results[0][produto].produtoid,
                                nome: results[0][produto].nome.split("-")[0],
                                cor: results[0][produto].nome.split("-")[0],
                                preco: results[0][produto].preco,
                                quantidade: results[0][produto].quantidade,
                                descricao: results[0][produto].descricao,
                                imagens: results[0][produto].imagens
                            };
                            produtos.push(json_produto);
                        }
                    });

                //Ir buscar morada
                await connection
                    .query("SELECT * FROM morada WHERE moradaid = :moradaid;", {
                        replacements: { moradaid: compras[compra].moradaid },
                    })
                    .then((results) => {
                        json_Morada = {
                            moradaid: results[0][0].moradaid,
                            rua: results[0][0].rua,
                            cidade: results[0][0].cidade,
                            codigo_postal: results[0][0].codigo_postal,
                            pais: results[0][0].pais,
                            descricao: results[0][0].descricao,
                        };
                    });

                /*
                await connection
                    .query(
                        "SELECT * FROM transacao,metodopagameto,estadotransacao WHERE transacao.transacaoid = :transacaoid and transacao.metopagamentoid = metodopagamento.metodopagamentoid and transacao.estadotransacaoid = estadotransacao.estadotransacaoid;", {
                            replacements: { transacaoid: compras[compra].transacaoid },
                        }
                    )
                    .then((results) => {
                        console.log(results[0])
                        json_pagamento = {
                            moradaid: results[0][0].moradaid,
                            rua: results[0][0].rua,
                            cidade: results[0][0].cidade,
                            codigo_postal: results[0][0].codigo_postal,
                            pais: results[0][0].pais,
                            descricao: results[0][0].des
                        }
                }) 
                */

                json_compra = {
                    compraid: compras[compra].compraid,
                    criadaem: compras[compra].criadaem,
                    estadoCompra: compras[compra].estadocompraid,
                };
                json_final = {
                    compra: json_compra,
                    produtos: produtos,
                    morada: json_Morada,
                };

                comprasFinais.push(json_final);
            }
            console.log(comprasFinais);
            return res.json(comprasFinais);
        } catch (error) {
            console.log(error);
        }
    },
    async getLastCompras(req, res) {
        await connection
            .query("select * from compra order by compraid desc LIMIT 5;")
            .then((results) => {
                return res.json(results[0]);
            });
    },
    async getComprasLastCompras(req, res) {
        const { initDate } = req.body;
        try {
            await connection
                .query(
                    "SELECT date_trunc('day', compra.criadaem) AS dia, SUM(total) AS total " +
                    "FROM compra " +
                    "WHERE criadaem >= :mes " +
                    "GROUP BY dia " +
                    "ORDER BY dia ", {
                        replacements: { mes: initDate },
                    }
                )
                .then((result) => {
                    return res.json(result[0]);
                });
        } catch (error) {
            console.log(error);
        }
    },
    async getComprasPorCategoria(req, res) {
        try {
            await connection
                .query(
                    "SELECT SUM(compra.total) AS total, categoria.categoriaid, categoria.nome " +
                    "FROM compra, linhacompra, produto, categoriaproduto, categoria " +
                    "WHERE compra.compraid = linhacompra.compraid AND " +
                    "linhacompra.produtoid = produto.produtoid AND " +
                    "produto.produtoid = categoriaproduto.produtoid and " +
                    "categoriaproduto.categoriaid = categoria.categoriaid " +
                    "GROUP BY categoria.categoriaid"
                )
                .then((result) => {
                    return res.json(result[0]);
                });
        } catch (error) {
            console.log(error);
        }
    },
};