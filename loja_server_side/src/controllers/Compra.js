const connection = require('../database');
require('dotenv').config();
const KEY = process.env.KEY;

module.exports = {
    async fazerCompra(req, res) {
        const { userid, moradaid, pagamentoid, artigos } = req.body
        var transacaoid;
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
        await connection.query("INSERT INTO transacao (criadoem,metodopagamentoid,estadotransacaoid) values(:data,:metodopagamentoid,:estadotransacaoid)", {
            replacements: { data: "", metodopagamentoid: pagamentoid, estadotransacaoid: 1 }
        }).then(results => {


        })

        /* 
            Criar compra
        */

        await connection.query("INSERT INTO compra (userid,moradaid,estadocompraid,transacaoid,desconto,portes,total,criadaem) values(:userid,:moradaid,1,:transacaoid,:desconto,:portes,:total,:data)", {
            replacements: { userid: userid, moradaid: moradaid, transacaoid: transacaoid, desconto: 'e', portes: 1, data: "" }
        }).then(results => {


        })
    },
}