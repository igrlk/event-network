const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');

const sequelize = require('../common/database');
const settings = require('../common/settings');

const User = sequelize.define(
  'user',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    password: Sequelize.STRING,
    name: Sequelize.STRING,
    email: Sequelize.STRING,
  },
  {
    defaultScope: {
      attributes: { exclude: ['password'] },
    },
  },
);

User.findByToken = async token => {
  try {
    const decodedToken = jwt.verify(token, settings.JWT_SECRET_WORD);

    if (!decodedToken || typeof decodedToken !== 'object') {
      return false;
    }
    if ('userId' in decodedToken) {
      user = await User.findByPk(decodedToken.userId);
    } else {
      return false;
    }

    if (!user || user.email !== decodedToken.email) {
      return false;
    }
    return user;
  } catch (err) {
    return false;
  }
};

module.exports = User;
