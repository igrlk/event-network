const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const settings = require('../common/settings');

module.exports.registration = async (req, res) => {
  const errors = [];

  try {
    const { name, email, password } = req.body;

    if (!name) {
      errors.push({ name: 'Name is empty' });
    }

    if (!email) {
      errors.push({ email: 'Email is empty' });
    } else if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email.toLowerCase(),
      )
    ) {
      errors.push({ email: 'Email is invalid' });
    }

    if (!password) {
      errors.push({ password: 'Password is empty' });
    } else if (password.length < 6) {
      errors.push({ password: 'Too short password (min 6 signs)' });
    }

    if (errors.length > 0) {
      return res.status(422).send({ errors });
    }

    if (await User.findOne({ where: { email } })) {
      return res.status(401).send({ message: '{"email": "This email has already existed"}' });
    }

    const user = await User.create({
      email,
      password: await bcrypt.hash(password, 12),
      name,
    });

    res.status(200).send({
      token: await createUserToken(user),
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (err) {
    errors.push({ error: err.toString() });
    res.status(400).send({ errors });
  }
};

module.exports.login = async (req, res) => {
  const errors = [];

  try {
    const { email, password } = req.body;

    if (!email) {
      errors.push({ email: 'Email is empty' });
    } else if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email.toLowerCase(),
      )
    ) {
      errors.push({ email: 'Email is invalid' });
    }

    if (!password) {
      errors.push({ password: 'Password is empty' });
    }

    if (errors.length > 0) {
      return res.status(422).send({ errors });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      errors.push({ common: 'Email or password not valid' });
    } else {
      const isEqual = await bcrypt.compare(password, user.password);
      if (!isEqual) {
        errors.push({ common: 'Email or password not valid' });
      }
    }

    if (errors.length > 0) {
      return res.status(422).send({ errors });
    }

    const token = await createUserToken(user);

    res.status(200).send({
      token,
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (err) {
    errors.push({ error: err.toString() });
    res.status(400).send({ errors });
  }
};

const createUserToken = async user => {
  const token = jwt.sign(
    {
      userId: user.id.toString(),
      email: user.email,
    },
    settings.JWT_SECRET_WORD,
    { expiresIn: '365d' },
  );

  return token;
};
