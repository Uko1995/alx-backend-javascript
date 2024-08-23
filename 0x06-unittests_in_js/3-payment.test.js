/* eslint-disable jest/no-hooks */
/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/prefer-expect-assertions */
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('spying on the utils method used by sendPaymentRequestToApi', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should check how many times the utils method was called', () => {
    const utilsSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(utilsSpy.calledOnce).to.be.true;
  });

  it('should check if the utils method was called with the right arguments', () => {
    const utilsSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 10);
    expect(utilsSpy.calledWith('SUM', 100, 10)).to.be.true;
    expect(utilsSpy.calledWithExactly('SUM', 100, 10)).to.be.true;
  });

  it('should check the returned value of the spied function', () => {
    const utilsSpy = sinon.stub(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 10);
    expect(utilsSpy.calledWith('SUM', 100, 10)).to.be.true;
    sendPaymentRequestToApi(5.5, 2.5);
    expect(utilsSpy.calledWith('SUM', 5.5, 2.5)).to.be.true;
  });
});
