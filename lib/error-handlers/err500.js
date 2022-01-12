'use strict';

function err500(err, req, res, next) {
  // console.error(err);
  if (err === 'Bad Request, No Name') res.status(500).send(err);
}

module.exports = err500;