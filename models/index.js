const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/database.js')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Tema = require('./tema')(sequelize, Sequelize);
db.Usuario = require('./usuario')(sequelize, Sequelize);

module.exports = db;