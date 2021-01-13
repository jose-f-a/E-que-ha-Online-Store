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
        "INSERT INTO transacao (criadoem,metodopagamentoid,estadotransacaoid) values(:data,:metodopagamentoid,:estadotransacaoid)RETURNING*;",
        {
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
        "INSERT INTO compra (userid,moradaid,estadocompraid,transacaoid,desconto,portes,total,criadaem) values(:userid,:moradaid,1,:transacaoid,:desconto,:portes,:total,:data)RETURNING*;",
        {
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
      artigos.map(async (artigo) => {
        await connection
          .query(
            "INSERT INTO linhacompra(compraid,produtoid,quantidade,preco) values(:compraid,:produtoid,:quantidade,:preco)RETURNING*;",
            {
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
        "UPDATE compra set total=:total where compraid=:compraid RETURNING*;",
        {
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
      await connection
        .query(
          "SELECT * FROM compra, utilizador WHERE compra.estadocompraid = 1 OR compra.estadocompraid = 2 OR compra.estadocompraid = 3 AND compra.userid = utilizador.userid;",
          {
            replacements: { userid: userid },
          }
        )
        .then((results) => {
          return res.json(results[0]);
        });
    } catch (error) {
      console.log(errror);
    }
  },
  async getFinishedCompras(req, res) {
    try {
      const { userid } = req.body;
      await connection
        .query(
          "SELECT * FROM compra, utilizador WHERE compra.estadocompraid = 4 AND compra.userid = utilizador.userid;",
          {
            replacements: { userid: userid },
          }
        )
        .then((results) => {
          return res.json(results[0]);
        });
    } catch (error) {
      console.log(error);
    }
  },
};
