const connection = require('../database');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const KEY = process.env.KEY;

module.exports = {
    async login(req, res) {
        const { email, password } = req.body

        await connection.query("Select * from utilizador where email=:email and pass=:password", {
            replacements: { email: email, password: password }
        }).then(results => {

            if (results[0].length != 0) {
                //Return json with jwt token
                return res.status(200).json({
                    token: jwt.sign({
                        name: results[0][0].nome,
                        userid: results[0][0].userid,
                    }, KEY, { expiresIn: '1h' })
                });
            } else {
                //return forbidden
                return res.status(403).json({ 'message': 'error' })
            }
        })
    },

    async sessionValidation(req, res) {
        try {
            const { token } = req.body
            const decode = await jwt.verify(token, KEY)
            return res.status(200).json({
                message: 'OK !'
            })

        } catch (error) {
            return res.status(500).json({
                message: 'You are not authenticated'
            })

        }

    }



}