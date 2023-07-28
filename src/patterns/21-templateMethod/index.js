class HotDrinksPot {
  // todo: add implementation
}

// todo: make refactoring via template method pattern
export class TeaPot {
  algorithmSteps = {};

  constructor() {
    this.prepareRecipe();
  }

  prepareRecipe () {
    this.boilWater();
    this.brewTea();
    this.pourInCup();
    this.addLemon();
  }

  boilWater ()  {
    this.algorithmSteps.boilWater = 'Boiling water';
  }

  brewTea () {
    this.algorithmSteps.brewTea = 'Steeping the tea';
  }

  pourInCup () {
    this.algorithmSteps.pourInCup = 'Pouring into cup';
  }

  addLemon () {
    this.algorithmSteps.addLemon = 'Adding Lemon';
  }
}

export class CoffeePot {
  algorithmSteps = {};

  constructor() {
    this.prepareRecipe();
  }

  prepareRecipe () {
    this.boilWater();
    this.brewCoffee();
    this.pourInCup();
    this.addSugarAndMilk();
  }

  boilWater ()  {
    this.algorithmSteps.boilWater = 'Boiling water';
  }

  brewCoffee () {
    this.algorithmSteps.brewCoffee = 'Dripping Coffee through filter';
  }

  pourInCup () {
    this.algorithmSteps.pourInCup = 'Pouring into cup';
  }

  addSugarAndMilk () {
    this.algorithmSteps.addSugarAndMilk = 'Adding Sugar and Milk';
  }
}
