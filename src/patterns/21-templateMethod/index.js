class HotDrinksPot {
  algorithmSteps = {};

  constructor() {
    this.prepareRecipe();
  }

  prepareRecipe () {
    this.boilWater();
    this.brewDrink();
    this.addCondiments();
    this.pourInCup();
    this.addLemon();
  }

  boilWater ()  {
    this.algorithmSteps.boilWater = 'Boiling water';
  }

  brewDrink () {
    this.algorithmSteps.brew = 'Steeping the drink';
  }

  pourInCup () {
    this.algorithmSteps.pourInCup = 'Pouring into cup';
  }

  addLemon () {
    this.algorithmSteps.addLemon = 'Adding Lemon';
  }

  addCondiments(){};
}

export class TeaPot extends HotDrinksPot {

  brewDrink () {
    this.algorithmSteps.brew = 'Steeping the tea';
  }
}

export class CoffeePot extends HotDrinksPot {
  addCondiments () {
    this.algorithmSteps.addCondiments = 'Adding Sugar and Milk';
  }

  brewDrink () {
    this.algorithmSteps.brew = 'Dripping Coffee through filter';
  }
}
