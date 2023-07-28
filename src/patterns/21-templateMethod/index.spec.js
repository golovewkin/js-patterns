import { TeaPot, CoffeePot } from './index.js';

describe('patterns/templateMethod', () => {
  it('should be able to make coffee', () => {
    const coffeePot = new CoffeePot();

    coffeePot.prepareRecipe();

    expect(coffeePot.algorithmSteps.addCondiments).toBe('Adding Sugar and Milk');
    expect(coffeePot.algorithmSteps.brew).toBe('Dripping Coffee through filter');
  });

  it('should be able to make tea', () => {
    const teaPot = new TeaPot();

    teaPot.prepareRecipe();

    expect(teaPot.algorithmSteps.addCondiments).toBe('Adding Lemon');
    expect(teaPot.algorithmSteps.brew).toBe('Steeping the tea');
  });
});
