import { Parent, Child } from './index.js';

describe('patterns/composite', () => {
  it('should be able to calculate total sum of elements value', () => {
    const list = new Parent([
      new Child(1),
      new Child(1),
      new Parent([
        new Child(1),
        new Child(1),
        new Child(1),
      ])
    ]);

    expect(list.getSum()).toBe(5);
  });
});
