import {Range} from './index.js';

describe('patterns/iterator', () => {
  it('should be able to return the range of numbers', () => {
    expect(new Range(1, 3).getRange()).toEqual([1, 2, 3]);
    expect(new Range(9, 15).getRange()).toEqual([9, 10, 11, 12, 13, 14, 15]);
  });

  it('should be able to iterate', () => {
    const range = new Range(1, 5);
    const expected = [1, 2, 3, 4, 5];
    const result = [];
    range.forEach((number)=> {
      result.push(number);
    });

    expect(expected.toString()).toEqual(result.toString());
  });
});

