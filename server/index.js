const express = require('express');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./common/database');
const settings = require('./common/settings');

const app = express();
app.use(express.json());
app.use(cors());
require('./routes')(app);

sequelize
  .sync({ force: false })
  .then(result => {
    app.listen(settings.HTTP_SERVER_PORT, () => {
      console.log(`server started at ${settings.HTTP_SERVER_PORT} port`);
    });
  })
  .catch(err => {
    console.log(err);
  });
