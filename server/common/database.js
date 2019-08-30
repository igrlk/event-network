const Sequelize = require('sequelize');

const settings = require('./settings');

module.exports = new Sequelize(settings.DB_NAME, settings.DB_USER, settings.DB_PASSWORD, {
  dialect: 'postgres',
  host: settings.DB_URL,
});
