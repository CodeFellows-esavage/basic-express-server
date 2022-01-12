'use strict';

const server = require('../lib/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing the route and method', () => {

  it('Should validate that the method is correct', async () => {
    const response = await request.post('/people?name=savagetest');
    expect(response.status).toEqual(404);
  });
  it('Should validate that the route is correct', async () => {
    const response = await request.get('/wrong?name=savagetest');
    expect(response.status).toEqual(404);
  });
});