const Sequelize = require("sequelize");
const banco = require("./db.js");

const Artigo = banco.define("artigo", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    numero: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    },
    caput: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: false
    }
})

module.exports = Artigo;