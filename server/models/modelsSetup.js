const User = require('./user');
const Event = require('./event');

User.hasMany(Event, { as: 'events' });
Event.belongsTo(User);
