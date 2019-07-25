const Sequelize = require('sequelize');

const sequelize = require('../common/database');

const Event = sequelize.define('event', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  text: Sequelize.STRING,
  date: Sequelize.BIGINT,
  shapeCoordinates: Sequelize.ARRAY(Sequelize.JSON),
});

module.exports = Event;
