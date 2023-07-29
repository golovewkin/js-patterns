const player = {
    play() {}
}

Object.freeze(player);

export {player};

export default class Singleton {
    static #instance;
  
    constructor() {
      if (Singleton.#instance) {
        return Singleton.#instance;
      }
  
      Singleton.#instance = this;
    }
  }