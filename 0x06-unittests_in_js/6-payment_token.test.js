/* eslint-disable jest/valid-expect */
/* eslint-disable jest/prefer-expect-assertions */
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('performing asynchronous testing', () => new Promise((done) => {
    const result = getPaymentTokenFromAPI(true);
    result.then((data) => {
      expect(data).to.be.an('object');
      expect(data).to.have.own.property('data');
      done();
    });
  }));
});
