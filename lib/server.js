'use strict';

const express = require('express');
const app = express();

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server is Listening on ${port}`);
    });
  },
  app,
};