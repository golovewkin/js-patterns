import {Range} from './index.js';

describe('patterns/iterator', () => {
  it('should be able to return the range of numbers', () => {
    expect(new Range(1, 3).getRange()).toEqual([1, 2, 3]);
    expect(new Range(9, 15).getRange()).toEqual([9, 10, 11, 12, 13, 14, 15]);
  });
});

