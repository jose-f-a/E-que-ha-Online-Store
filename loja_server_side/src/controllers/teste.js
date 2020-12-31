const connection = require('../database');

module.exports = {
    async a(req, res) {
        await connection.query("Select * from categoria").then(results => {

            return res.json(results[0])
        })
    }



}