const User = require('./user');
const Event = require('./event');

User.hasMany(Event, {
  as: 'events',
  constraints: false,
  defaultValue: [],
});
Event.belongsTo(User, { as: 'user', foreignKey: 'userId', constraints: false });
Event.hasMany(User, { as: 'participants', constraints: false });
