/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/require-top-level-describe */
/* eslint-disable jest/consistent-test-it */
/* eslint-disable no-undef */
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromApi', () => {
  it('should return reslove if true', () => new Promise((done) => {
    getPaymentTokenFromAPI(true).then((response) => {
      expect(response).to.be.an('object');
      expect(response).to.have.property('data', 'Sucessful response from the API');
      done();
    })
      .catch((err) => done(err));
  }));
});
