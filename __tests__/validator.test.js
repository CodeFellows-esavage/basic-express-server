'use strict';

const server = require('../lib/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing the validator function', () => {

  it('Should validate that the name key exists in the query', async () => {
    const response = await request.get('/people?name=savagetest');
    // console.log(response);
    expect(response.text).toEqual('savagetest');
    expect(response.status).toEqual(200);
  });

  it('Should send a 500 status if name is not in the query', async () => {
    const response = await request.get('/people');
    // console.log(response);
    expect(response.status).toEqual(500);
  });
});