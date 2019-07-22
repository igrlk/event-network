const authRoutes = require('./authRoutes');
const eventRoutes = require('./eventRoutes');
const User = require('../models/user');

module.exports = app => {
  app.use('/auth', authRoutes);

  app.use('', addUserToRequest);

  app.use('/events', eventRoutes);
};

async function addUserToRequest(req, res, next) {
  try {
    const authHeader = req.get('Authorization');
    if (!authHeader || authHeader.split(' ')[0].toLowerCase() !== 'bearer') {
      throw new Error({
        statusCode: 403,
        message: 'Invalid token',
        data: [],
      });
    }
    const token = authHeader.split(' ')[1];

    const user = await User.findByToken(token);
    if (!user) {
      throw new Error({
        statusCode: 403,
        message: 'Invalid token',
        data: [],
      });
    }
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
}
