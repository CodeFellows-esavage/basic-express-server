'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const err404 = require('./error-handlers/err404');
const err500 = require('./error-handlers/err500');

app.use(logger);
// app.use(validator);
app.get('/people', validator, (req, res, next) => {
  const nameObj = { name: req.query.name };
  console.log(nameObj);
  res.status(200).send(nameObj);
});


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