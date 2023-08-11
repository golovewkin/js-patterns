import { ProductsStore } from './index.js';

const products = [
  {
    model: "m1",
    info: {
      name: "Apple",
      country: "USA",
      color: "silver"
    }
  },
  {
    model: "m2",
    info: {
      name: "Apple",
      country: "USA",
      color: "silver"
    }
  },
  {
    model: "m3",
    info: {
      name: "HP",
      country: "China",
      color: "black"
    }
  }
];

describe('patterns/flyweight', () => {
  it('should be able to store shared product state inside flyweights', () => {
    const store = new ProductsStore();

    for (const product of products) {
      store.addProduct(product);
    }

    expect(store.products.length).toBe(3);
    expect(store.flyweights.length).toBe(2);
  });
});
