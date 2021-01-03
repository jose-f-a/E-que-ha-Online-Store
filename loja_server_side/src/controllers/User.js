const connection = require('../database');

module.exports = {
    async login(req, res) {
        const { email, password } = req.body
        await connection.query("Select * from categoria").then(results => {

            return res.json(results[0])
        })
    }



}