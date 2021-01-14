const connection = require('../database');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const KEY = process.env.KEY;

module.exports = {
    async login(req, res) {
        console.log('A fazer login')
        const { email, password } = req.body

        await connection.query("Select * from utilizador where email=:email and pass=:password", {
            replacements: { email: email, password: password }
        }).then(results => {

            if (results[0].length != 0) {
                //Return json with jwt token

                if (results[0][0].isadmin) {
                    console.log('Admin')
                    return res.status(200).json({
                        token: jwt.sign({
                            name: results[0][0].nome,
                            userid: results[0][0].userid,
                            isadmin: results[0][0].isadmin
                        }, KEY)
                    });
                } else {
                    return res.status(200).json({
                        token: jwt.sign({
                            name: results[0][0].nome,
                            userid: results[0][0].userid,
                        }, KEY)
                    });
                }



            } else {
                //return forbidden
                return res.status(403).json({ 'message': 'error' })
            }
        })
    },

    async sessionValidation(req, res) {
        try {
            const { token } = req.body
            const { isadmin } = await jwt.verify(token, KEY)

            return res.status(200).json({
                message: 'OK !',
                isadmin: isadmin
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
        var moradaid = [];
        var moradas = [];
        await connection.query("SELECT * FROM moradautilizador where userid= :userid;", {
                replacements: {
                    userid: userid,
                },
            })
            .then((result) => {
                if (result[0].length > 0) {
                    result[0].forEach(element => {
                        moradaid.push(element.moradaid)
                    });
                } else {
                    return res.json({})
                }
            });

        if (moradaid.length > 1) {
            await Promise.all(
                moradaid.map(async(element) => {

                    await connection.query("SELECT * FROM morada where moradaid= :moradaid;", {
                            replacements: {
                                moradaid: element,
                            },
                        })
                        .then((result) => {

                            moradas.push(result[0][0])

                        })
                })
            )
            return res.json(moradas)
        } else {

            await connection.query("SELECT * FROM morada where moradaid= :moradaid;", {
                    replacements: {
                        moradaid: moradaid[0],
                    },
                })
                .then((result) => {

                    return res.json(result[0][0])

                });
        }


    }
}