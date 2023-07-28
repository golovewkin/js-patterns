import { Coffee, Milk, Sugar } from './index.js';

describe('patterns/decorator', () => {
  it('should be able to extend the object behavior', () => {
    const coffeeWithMilkAndSugar = new Milk(new Sugar(new Coffee()));
    const coffeeWithMilk = new Milk(new Coffee());
    const coffeeWithSugar = new Sugar(new Coffee());

    expect(coffeeWithMilkAndSugar.getPrice()).toBe(8);
    expect(coffeeWithMilk.getPrice()).toBe(7);
    expect(coffeeWithSugar.getPrice()).toBe(6);
  });
});
