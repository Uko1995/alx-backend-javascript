// Import the function to be tested
import taskBlock from './1-block-scoped.js';

describe('taskBlock', () => {
  test('returns [false, true] when trueOrFalse is false', () => {
    const result = taskBlock(false);
    expect(result).toEqual([false, true]);
  });

  test('returns [true, false] when trueOrFalse is true', () => {
    const result = taskBlock(true);
    expect(result).toEqual([true, false]);
  });
});

