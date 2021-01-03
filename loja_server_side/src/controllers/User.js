const connection = require('../database');

module.exports = {
    async signup (req, res) {
        const { nome, contacto, email, password } = req.body;
        await connection.query("INSERT INTO user(nome, contacto, email, password) VALUES (:nome, :contacto, :email, :password)", {
            replacements: {
                nome: nome, 
                contacto: contacto,
                email: email,
                password: password
            }
        }).then(result => {
            console.log(result);
        })
    }
}

