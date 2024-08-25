/* eslint-disable jest/valid-expect */
/* eslint-disable jest/no-test-callback */
/* eslint-disable jest/prefer-expect-assertions */
const { it } = require('node:test');
const request = require('request');
const { expect } = require('chai');

describe('status and content', () => {
  const endpoint = 'https://localhost:7865';
  it('correct code and correct result', (done) => {
    request(endpoint, (error, response, body) => {
      expect(response.statusCode).equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
