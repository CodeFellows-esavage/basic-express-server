'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const err404 = require('./error-handlers/err404');
const err500 = require('./error-handlers/err500');

app.use(logger);
app.use(validator);
// app.get('/people');
// if there is an error in the name, use this as a 500
//if get isn't hit, or path isn't hit, use this as a 404

app.use(err404);
app.use(err500);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server is Listening on ${port}`);
    });
  },
  app,
};