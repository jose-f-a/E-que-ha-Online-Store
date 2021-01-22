require("dotenv").config();
const connection = require("../database");

module.exports = {
  async getArtigo(req, res) {
    var todosProdutos;
    var variantes = [];
    var produtosFinais = [];

    /* Vai buscar todos os produtos e separar as variantes */
    try {
      await connection
        .query("Select produtoid, nome, preco, descricao from produto")
        .then((results) => {
          todosProdutos = results[0];
        });
      if (todosProdutos.length == 0) {
        return res.json({ mensagem: "vazio" });
      }

      /* Vair percorrer todos os produtos e vai procurar as suas variantes */

      for (const produto of todosProdutos) {
        const nomeProduto = produto.nome.split("-")[0];

        var json_produto;
        var json_variantes;
        var exist = false;

        produtosFinais.forEach((pf) => {
          if (pf.nome === nomeProduto) {
            exist = true;
          }
        });

        if (!exist) {
          var variaveis;
          await connection
            .query(
              "Select * from produto where nome like :nome and produtoid <> :id",
              {
                replacements: {
                  id: produto.produtoid,
                  nome: nomeProduto + "%",
                },
              }
            )
            .then((results) => {
              //Todos os produtos aqui são as variantes
              variantes = results[0];
            });

          var review;
          var total;

          for (var i in variantes) {
            var json_variantes = {
              produtoid: variantes[i].produtoid,
              nome: variantes[i].nome.split("-")[0],
              cor: variantes[i].nome.split("-")[1],
            };
            variantes.push(json_variantes);
          }

          // CALCULAR AS REVEIEW AQUI
          var querySQL =
            "Select CAST(AVG(rating)AS DECIMAL(3,2))as review, count(*)total from review where produtoid =:idmain ";

          var replacements = { idmain: produto.produtoid };

          for (var i = 0; i < variantes.length; i++) {
            querySQL = querySQL + " or produtoid =:id" + i;
            replacements["id" + i] = variantes[i].produtoid;
          }

          await connection
            .query(querySQL, { replacements: replacements })
            .then((res) => {
              json_produto = {
                produtoid: produto.produtoid,
                nome: produto.nome.split("-")[0],
                cor: produto.nome.split("-")[1],
                preco: produto.preco,
                rating: {
                  review: res[0][0].review,
                  total: res[0][0].total,
                },
                variantes: variantes,
              };
            });
          produtosFinais.push(json_produto);
        }
      }
      return res.json(produtosFinais);
    } catch (error) {
      console.log(error);
    }
  },
  async getArtigoById(req, res) {
    try {
      const { id } = req.query;
      var produto;
      var variantes;

      await connection
        .query("Select * from produto where produtoid =:id", {
          replacements: {
            id: id,
          },
        })
        .then((results) => {
          produto = results[0];
        });
      if (produto.length > 0) {
        const nomeProduto = produto[0].nome.split("-")[0];
        //Existe produto, vai se buscar as variantes
        await connection
          .query(
            "Select * from produto where nome like :nome and produtoid <> :id",
            {
              replacements: {
                id: id,
                nome: nomeProduto + "%",
              },
            }
          )
          .then((results2) => {
            variantes = results2[0];
          });

        if (variantes.length > 0) {
          //existe variantes
          //Get rating geral
          //Fazer dinamincamnte a query e o replacenents
          var query =
            "Select CAST(AVG(rating)AS DECIMAL(3,2))as review, count(*)total from review where produtoid =:idmain ";

          var replacements = { idmain: produto[0].produtoid };

          for (var i = 0; i < variantes.length; i++) {
            query = query + " or produtoid =:id" + i;
            replacements["id" + i] = variantes[i].produtoid;
          }
          await connection
            .query(query, { replacements: replacements })
            .then((results3) => {
              console.log(results3);
              //Criar json com o produto e acrescentar ao rating o valor result3[0], e um array de variantes
              var variantes2 = [];
              console.log(variantes[0].produtoid);
              for (var i = 0; i < variantes.length; i++) {
                var varianteNova = {};
                query = query + " or produtoid =:id" + i;
                varianteNova.produtoid = variantes[i].produtoid;
                varianteNova.nome = variantes[i].nome.split("-")[0];
                varianteNova.cor = variantes[i].nome.split("-")[1];
                variantes2.push(varianteNova);
              }

              //Verificar se existe rating
              if (results3[0][0].review) {
                var resposta = {
                  produto: {
                    produtoid: produto[0].produtoid,
                    nome: nomeProduto,
                    cor: produto[0].nome.split("-")[1],
                    preco: produto[0].preco,
                    desconto: produto[0].desconto,
                    descricao: produto[0].descricao,
                  },
                  rating: {
                    review: results3[0][0].review,
                    total: results3[0][0].total,
                  },
                  variantes: variantes2,
                };
              } else {
                var resposta = {
                  produto: {
                    produtoid: produto[0].produtoid,
                    nome: nomeProduto,
                    cor: produto[0].nome.split("-")[1],
                    preco: produto[0].preco,
                    desconto: produto[0].desconto,
                    descricao: produto[0].descricao,
                  },
                  rating: {
                    review: 0,
                    total: 0,
                  },
                  variantes: variantes2,
                };
              }
              return res.json(resposta);
            });
          //Vamos retornar os dados do produto com o rating geral, mais uma lista da variantes
        } else {
          //nao existe variantes
          var query =
            "Select CAST(AVG(rating)AS DECIMAL(3,2))as review, count(*)total from review where produtoid =:idmain ";
          await connection
            .query(query, { replacements: { idmain: id } })
            .then((results3) => {
              //Verificar se existe rating
              if (results3[0][0].review) {
                var resposta = {
                  produto: {
                    produtoid: produto[0].produtoid,
                    nome: nomeProduto,
                    cor: produto[0].nome,
                    preco: produto[0].preco,
                    desconto: produto[0].desconto,
                    descricao: produto[0].descricao,
                  },
                  rating: {
                    review: results3[0][0].review,
                    total: results3[0][0].total,
                  },
                  variantes: [],
                };
              } else {
                var resposta = {
                  produto: {
                    produtoid: produto[0].produtoid,
                    nome: nomeProduto,
                    cor: produto[0].nome,
                    preco: produto[0].preco,
                    desconto: produto[0].desconto,
                    descricao: produto[0].descricao,
                  },
                  rating: {
                    review: 0,
                    total: 0,
                  },
                  variantes: [],
                };
              }
              return res.json(resposta);
            });

          //Vamos retornar os dados do produto com o rating geral
        }
      } else {
        return res.json({ mensagem: "id not found" });
      }
    } catch (error) {
      console.log(error);
    }
  },

  /* Usado na compra para atualizar os preços e assim */
  async getArtigosAtualizados(req, res) {
    var { artigos } = req.body;
    var artigosUpdate = [];
    await Promise.all(
      artigos.map(async (artigo) => {
        await connection
          .query("Select * from produto where produtoid =:id", {
            replacements: {
              id: artigo.produtoid,
            },
          })
          .then((results) => {
            const jsonAr = {
              produtoid: artigo.produtoid,
              quantidade: artigo.quantidade,
              preco: results[0][0].preco,
              nome: results[0][0].nome.split("-")[0],
            };
            artigosUpdate.push(jsonAr);
          });
      })
    );

    return res.json(artigosUpdate);
  },

  async createProduct(req, res) {
    console.log(req.body);
    try {
      /* Introduzir o produto na bd */

      /* Com o id mudar o nome das imagens recebidas e dar save na pasta certa */
      let data = [];

      //loop all files
      _.forEach(_.keysIn(req.files.photos), (key) => {
        let photo = req.files.photos[key];

        //move photo to uploads directory
        photo.mv("./uploads/" + photo.name);

        //push file details
        data.push({
          name: photo.name,
          mimetype: photo.mimetype,
          size: photo.size,
        });
      });

      //return response
      res.send({
        status: true,
        message: "Files are uploaded",
        data: data,
      });
    } catch (err) {
      res.status(500).send(err);
    }
  },

  async getLastReview(req, res) {
    var review;

    var resu = [];
    await connection
      .query("select * from review order by reviewid desc LIMIT 5;")
      .then((results) => {
        review = results[0];
      });

    for (i in review) {
      await connection
        .query("select * from produto where produtoid =:id;", {
          replacements: {
            id: review[i].produtoid,
          },
        })
        .then((results) => {
          json_fi = {
            rating: review[i].rating,
            nome:
              "(" + review[i].rating + ")" + results[0][0].nome.split("-")[0],
          };
          resu.push(json_fi);
        });
    }

    return res.json(resu);
  },

  async getArtigoByQuery(req, res) {
    const { query } = req.query;
    /* Tratamento dos dados */
    const upperList = query.toUpperCase().split(" ");
    var queryFinal = "%";
    for (i in upperList) {
      queryFinal = queryFinal + upperList[i] + "%";
    }
    console.log(queryFinal);
    var todosProdutos;
    var variantes = [];
    var produtosFinais = [];

    /* Vai buscar todos os produtos e separar as variantes */
    try {
      console.log("resultdsas");
      await connection
        .query(
          "Select produto.preco,produto.desconto,produto.stock,produto.descricao,produto.nome,produto.produtoid from produto,categoria, categoriaproduto where (UPPER(produto.nome) like :query) or" +
            "(UPPER(produto.descricao) like :query)or " +
            "(categoriaproduto.produtoid =produto.produtoid " +
            "and categoriaproduto.categoriaid = categoria.categoriaid and UPPER(categoria.nome) like :query);",
          {
            replacements: {
              query: queryFinal,
            },
          }
        )
        .then((results) => {
          todosProdutos = results[0];
        });
      if (todosProdutos.length == 0) {
        return res.json({ mensagem: "vazio" });
      }

      /* Vair percorrer todos os produtos e vai procurar as suas variantes */

      for (const produto of todosProdutos) {
        const nomeProduto = produto.nome.split("-")[0];

        var json_produto;
        var json_variantes;
        var exist = false;

        produtosFinais.forEach((pf) => {
          if (pf.nome === nomeProduto) {
            exist = true;
          }
        });

        if (!exist) {
          var variaveis;
          await connection
            .query(
              "Select * from produto where nome like :nome and produtoid <> :id",
              {
                replacements: {
                  id: produto.produtoid,
                  nome: nomeProduto + "%",
                },
              }
            )
            .then((results) => {
              //Todos os produtos aqui são as variantes
              variantes = results[0];
            });
          var review;
          var total;
          for (var i in variantes) {
            var json_variantes = {
              produtoid: variantes[i].produtoid,
              nome: variantes[i].nome.split("-")[0],
              cor: variantes[i].nome.split("-")[1],
            };
            variantes.push(json_variantes);
          }
          // CALCULAR AS REVEIEW AQUI
          var querySQL =
            "Select CAST(AVG(rating)AS DECIMAL(3,2))as review, count(*)total from review where produtoid =:idmain ";

          var replacements = { idmain: produto.produtoid };

          for (var i = 0; i < variantes.length; i++) {
            querySQL = querySQL + " or produtoid =:id" + i;
            replacements["id" + i] = variantes[i].produtoid;
          }
          await connection
            .query(querySQL, { replacements: replacements })
            .then((res) => {
              json_produto = {
                produtoid: produto.produtoid,
                nome: produto.nome.split("-")[0],
                cor: produto.nome.split("-")[1],
                preco: produto.preco,
                rating: {
                  review: res[0][0].review,
                  total: res[0][0].total,
                },
                variantes: variantes,
              };
            });

          produtosFinais.push(json_produto);
        }
      }

      return res.json(produtosFinais);
    } catch (error) {
      console.log(error);
    }
  },

  async getArtigoByCategoria(req, res) {
    const { id } = req.query;
    var todosProdutos;
    var variantes = [];
    var produtosFinais = [];

    /* Vai buscar todos os produtos e separar as variantes */
    try {
      console.log("resultdsas");
      await connection
        .query(
          "Select produto.preco,produto.desconto,produto.stock,produto.descricao,produto.nome,produto.produtoid from produto, categoriaproduto where " +
            "categoriaproduto.produtoid =produto.produtoid and categoriaproduto.categoriaid = :id",
          {
            replacements: {
              id: id,
            },
          }
        )
        .then((results) => {
          todosProdutos = results[0];
        });
      if (todosProdutos.length == 0) {
        return res.json({ mensagem: "vazio" });
      }

      /* Vair percorrer todos os produtos e vai procurar as suas variantes */

      for (const produto of todosProdutos) {
        const nomeProduto = produto.nome.split("-")[0];

        var json_produto;
        var json_variantes;
        var exist = false;

        produtosFinais.forEach((pf) => {
          if (pf.nome === nomeProduto) {
            exist = true;
          }
        });

        if (!exist) {
          var variaveis;
          await connection
            .query(
              "Select * from produto where nome like :nome and produtoid <> :id",
              {
                replacements: {
                  id: produto.produtoid,
                  nome: nomeProduto + "%",
                },
              }
            )
            .then((results) => {
              //Todos os produtos aqui são as variantes
              variantes = results[0];
            });
          var review;
          var total;
          for (var i in variantes) {
            var json_variantes = {
              produtoid: variantes[i].produtoid,
              nome: variantes[i].nome.split("-")[0],
              cor: variantes[i].nome.split("-")[1],
            };
            variantes.push(json_variantes);
          }
          // CALCULAR AS REVEIEW AQUI
          var querySQL =
            "Select CAST(AVG(rating)AS DECIMAL(3,2))as review, count(*)total from review where produtoid =:idmain ";

          var replacements = { idmain: produto.produtoid };

          for (var i = 0; i < variantes.length; i++) {
            querySQL = querySQL + " or produtoid =:id" + i;
            replacements["id" + i] = variantes[i].produtoid;
          }
          await connection
            .query(querySQL, { replacements: replacements })
            .then((res) => {
              json_produto = {
                produtoid: produto.produtoid,
                nome: produto.nome.split("-")[0],
                cor: produto.nome.split("-")[1],
                preco: produto.preco,
                rating: {
                  review: res[0][0].review,
                  total: res[0][0].total,
                },
                variantes: variantes,
              };
            });

          produtosFinais.push(json_produto);
        }
      }

      return res.json(produtosFinais);
    } catch (error) {
      console.log(error);
    }
  },

  async getArtigoMelhorRating(req, res) {
    try {
      await connection
        .query(
          "SELECT produto.produtoid, produto.nome, produto.descricao, produto.preco, ROUND(AVG(review.rating), 2) AS media FROM produto, review WHERE produto.produtoid = review.produtoid GROUP BY produto.produtoid ORDER BY media DESC LIMIT 10"
        )
        .then((results) => {
          console.log(results[0]);
          return res.json(results[0]);
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
