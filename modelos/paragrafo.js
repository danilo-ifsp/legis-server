const Sequelize = require("sequelize");
const banco = require("./db.js");

const Paragrafo = banco.define("paragrafo", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    pai: {
        type: Sequelize.INTEGER,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false
    },
    numero: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    texto: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    }
})

module.exports = Paragrafo;