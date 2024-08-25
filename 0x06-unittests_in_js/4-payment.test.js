/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable jest/no-hooks */
/* eslint-disable jest/prefer-expect-assertions */
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('stubing Utils method', () => {
  it('checking the arguments passed to the stub', () => {
    const utilsStub = sinon.stub(Utils, 'calculateNumber');
    utilsStub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(utilsStub.calledWith('SUM', 100, 20)).to.be.true;
    utilsStub.restore();
  });
  it('checking the outcome of the stub and the log statment', () => {
    const logSpy = sinon.spy(console, 'log');
    const utilsStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(utilsStub.returned(10)).to.be.true;
    expect(logSpy.calledWith('The total is: 10')).to.be.true;
    utilsStub.restore();
    logSpy.restore();
  });
});
