const Sequelize = require("sequelize");
const sequelize = new Sequelize('legis', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    logging: false
});
/*
(async function () {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();
*/


module.exports = sequelize;