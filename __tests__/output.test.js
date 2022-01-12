'use strict';

const server = require('../lib/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing the object returned', () => {
  it('Should return the proper object as a response', async () => {
    const response = await request.get('/people?name=savageTest');
    expect(response.body.name).toEqual('savageTest');
  });
});