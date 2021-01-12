require("dotenv").config();
const connection = require("../database");

module.exports = {
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
          console.log(results);
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
          console.log(results);
          return res.json(results[0]);
        });
    } catch (error) {
      console.log(error);
    }
  },
};
