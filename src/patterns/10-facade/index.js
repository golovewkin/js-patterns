export class Game {
  start () {
    // todo: add implementation
  }
}

class Location {
  monsters = [];

  constructor(name = '') {
    this.name = name;
  }

  addMonster (monster = {}) {
    this.monsters.push(monster);
  }
}

export class Hero {
  constructor(name = '') {
    this.name = name;
  }
}

export class Monster {
  constructor(type = '') {
    this.type = type;
  }
}
