'use strict';

function validator(req, res, next) {
  console.log(req.query);
  console.log(Object.keys(req.query).includes('name'));

  Object.keys(req.query).includes('name') ? next() : next('Bad Request, No Name');
}

module.exports = validator;