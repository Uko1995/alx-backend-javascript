/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/valid-expect */
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should add if type is SUM', () => {
    expect(calculateNumber('SUM', 1.3, 2.2)).to.equal(3);
    expect(calculateNumber('SUM', 1.7, 0)).to.equal(2);
  });

  it('should subtract if type is SUBRACT', () => {
    expect(calculateNumber('SUBTRACT', 5.0, 1.0)).to.equal(4);
    expect(calculateNumber('SUBTRACT', 4.7, 1.3)).to.equal(4);
    expect(calculateNumber('SUBTRACT', 4.5, 1.7)).to.equal(3);
  });

  it('should divide if type is DIVIDE', () => {
    expect(calculateNumber('DIVIDE', 1.3, 1)).to.equal(1);
    expect(calculateNumber('DIVIDE', 11.6, 1.7)).to.equal(6);
  });

  it('should return Error if type is DIVIDE and b is 0', () => {
    expect(calculateNumber('DIVIDE', 1.3, 0)).to.equal('Error');
  });
});
