export class Memento {
  // todo: add implementation
}

export class History {
  // todo: add implementation
}

export class Hero {
  #name = '';

  #state = {
    level: 1,
    skills: [],
  };

  constructor(name = '', history = {}) {
    this.#name = name;
    this.history = history;
  }

  get state () {
    return this.#state;
  }

  addSkill (skill) {
    this.#state.skills.push(skill);
  }

  increaseLevel () {
    this.#state.level += 1;
  }

  load (snapshot = {}) {
    // todo: add implementation
  }

  save () {
    // todo: add implementation
  }
}
