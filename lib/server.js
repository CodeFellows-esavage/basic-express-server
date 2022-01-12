'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger');

app.use(logger);
// app.get('/people');

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server is Listening on ${port}`);
    });
  },
  app,
};