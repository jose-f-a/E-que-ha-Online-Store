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
                    }, KEY)
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

    },

    async signup(req, res) {
        try {
            const { nome, contacto, email, password } = req.body;
            await connection.query("INSERT INTO utilizador (nome, contacto, email, pass, isAdmin) VALUES (:nome, :contacto, :email, :password, false);", {
                    replacements: {
                        nome: nome,
                        contacto: contacto,
                        email: email,
                        password: password,
                    },
                })
                .then((result) => {
                    console.log(result);
                });
        } catch (error) {
            console.log(error);
        }
    },

    async getMoradas(req, res) {
        const { userid } = req.query
        var moradaid;
        await connection.query("SELECT * FROM moradautilizador where userid= :userid;", {
                replacements: {
                    userid: userid,
                },
            })
            .then((result) => {
                moradaid = result[0][0].moradaid

            });
        await connection.query("SELECT * FROM morada where moradaid= :moradaid;", {
                replacements: {
                    moradaid: moradaid,
                },
            })
            .then((result) => {

                return res.json(result[0][0])

            });

    }
}