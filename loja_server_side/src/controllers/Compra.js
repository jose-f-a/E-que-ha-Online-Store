const connection = require('../database');
const sequelize = require('sequelize')
require('dotenv').config();
const KEY = process.env.KEY;

module.exports = {
    async fazerCompra(req, res) {
        //return res.json({})**
        const { userid, moradaid, pagamentoid, artigos } = req.body
        var transacaoid;
        var compraid;
        var total;
        /* 
            ESTADOS DE COMPRA
            1-Pedido Recebido -> inicial
            2-Produtos Embalados
            3-Produtos Enviados
            4-Produtos Entregues
        */
        /*
             ESTADO TRANSAÇÃO
             1-Confirmada
         */

        /*
            Criar transação

         */

        await connection.query("INSERT INTO transacao (criadoem,metodopagamentoid,estadotransacaoid) values(:data,:metodopagamentoid,:estadotransacaoid)RETURNING*;", {
            replacements: { data: new Date, metodopagamentoid: pagamentoid, estadotransacaoid: 1 },
            type: sequelize.QueryTypes.INSERT
        }).then(results => {
            transacaoid = results[0][0].transacaoid
        })

        /* 
            Criar compra
        */

        await connection.query("INSERT INTO compra (userid,moradaid,estadocompraid,transacaoid,desconto,portes,total,criadaem) values(:userid,:moradaid,1,:transacaoid,:desconto,:portes,:total,:data)RETURNING*;", {
            replacements: { userid: userid, moradaid: moradaid, transacaoid: transacaoid, desconto: 0, portes: 1, data: new Date, total: 2.0 }
        }).then(results => {
            compraid = results[0][0].compraid


        })

        /*
            Criar linhas de compra
         */


        /*
           Update compra com o total
        */


        /*
           Retornar id da compra ou a compra em si
        */
    },
}