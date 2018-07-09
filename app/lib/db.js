const Sequelize = require('sequelize');
const sequelize = new Sequelize('puzzle', 'saturn001', 'newlife123', {
    host: '192.168.10.10',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});
module.exports = sequelize