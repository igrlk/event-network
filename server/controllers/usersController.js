const User = require('../models/user');

module.exports.getUsers = async (req, res) => {
  const errors = [];
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (err) {
    errors.push({ error: err.toString() });
    res.status(400).send({ errors });
  }
};
