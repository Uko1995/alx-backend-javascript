/* eslint-disable jest/prefer-expect-assertions */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  // eslint-disable-next-line jest/expect-expect
  it('should add if type is SUM', () => {
    assert.strictEqual(calculateNumber('SUM', 1.3, 2.2), 3);
    assert.strictEqual(calculateNumber('SUM', 1.7, 0), 2);
  });

  // eslint-disable-next-line jest/expect-expect
  it('should subtract if type is SUBRACT', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 5.0, 1.0), 4);
    assert.strictEqual(calculateNumber('SUBTRACT', 4.7, 1.3), 4);
    assert.strictEqual(calculateNumber('SUBTRACT', 4.5, 1.7), 3);
  });

  // eslint-disable-next-line jest/expect-expect
  it('should divide if type is DIVIDE', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.3, 1), 1);
    assert.strictEqual(calculateNumber('DIVIDE', 11.6, 1.7), 6);
  });
  // eslint-disable-next-line jest/expect-expect
  it('should return Error if type is DIVIDE and b is 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.3, 0), 'Error');
  });
});
