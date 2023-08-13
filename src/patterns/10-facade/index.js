export class Game {
  start () {
    this.hero = new Hero('Barbarian');
    const location = new Location('darkForest');
    location.addMonster({type: 'demon'});
    location.addMonster({type: 'demon'});
    location.addMonster({type: 'undead'});
    this.location = location;
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
