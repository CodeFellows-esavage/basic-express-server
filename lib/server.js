'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

app.use(logger);
app.use(validator);
// app.get('/people');

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server is Listening on ${port}`);
    });
  },
  app,
};