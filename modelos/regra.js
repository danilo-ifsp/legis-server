const Sequelize = require("sequelize");
const banco = require("./db.js");

const Regra = banco.define("regra", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tipo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: false
    },
    identificador: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    ano: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    }

})

module.exports = Regra;