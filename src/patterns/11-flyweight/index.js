class Flyweight {
  static isEqual = function(obj1, obj2){
      const props1 = Object.getOwnPropertyNames(obj1);
      const props2 = Object.getOwnPropertyNames(obj2);
      if (props1.length !== props2.length) {
        return false;
      }
      for (let i = 0; i < props1.length; i++) {
        if (obj2[props1[i]] !== obj1[props1[i]]) {
          return false;
        }
      }

      return true;
    }
}

export class ProductsStore {
  flyweights = [];
  products = [];

  addProduct (productData = {}) {
    const productFlyweightIndex = this.getOrCreateFlyweight(productData.info);
    this.products.push({...productData, flyweight: productFlyweightIndex});
  }

  getOrCreateFlyweight (info = {}) {
    const findIndex = this.flyweights.findIndex(object => Flyweight.isEqual(object, info));
    if(~findIndex) {
      return findIndex;
    } else {
      this.flyweights.push(info);
      return this.flyweights.length -1;
    }
  }
}
