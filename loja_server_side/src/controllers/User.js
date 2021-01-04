const connection = require("../database");

module.exports = {
  async signup(req, res) {
    try{
        const { nome, contacto, email, password } = req.body;
        await connection.query("INSERT INTO utilizador (nome, contacto, email, pass, isAdmin) VALUES (:nome, :contacto, :email, :password, false);",
            {
            replacements: {
                nome: nome,
                contacto: contacto,
                email: email,
                password: password,
            },
            }
        )
        .then((result) => {
            console.log(result);
        });
    } catch(error) {
        console.log(error);
    }
    }
};
