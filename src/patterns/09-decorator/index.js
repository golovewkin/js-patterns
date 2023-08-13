export class Milk {
  price = 2;

  constructor(coffee) {
    this.coffee = coffee;
  }
  getPrice () {
    return this.price + this.coffee.getPrice();
  }
}

export class Sugar {
  price = 1;

  constructor(coffee) {
    this.coffee = coffee;
  }
  getPrice () {
    return this.price + this.coffee.getPrice();
  }
}

export class Coffee {
  price = 5;

  getPrice () {
    return this.price;
  }
}

