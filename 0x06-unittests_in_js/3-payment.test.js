/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/no-hooks */
/* eslint-disable jest/prefer-expect-assertions */
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentToAPI', () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('checking how many times utils method was called', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('should use correct arguments', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledWithExactly('SUM', 10, 10)).to.be.true;
  });
  it('correct return value', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.returned(120)).to.be.true;
  });
});
