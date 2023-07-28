class Flyweight {
  // todo: add implementation
}

export class ProductsStore {
  flyweights = {};
  products = [];

  addProduct (productData = {}) {
    const productFlyweight = this.getOrCreateFlyweight(productData.info);

    // todo: add implementation
  }

  getOrCreateFlyweight (info = {}) {
    // todo: add implementation
  }
}
