export class Club {
  speed = 0.5;
  damage = 20;
  attack (monster) {
    return this.damage * this.speed - monster.armor;
  }
}

export class Sword {
  speed = 1;
  damage = 15;
  attack (monster) {
    // todo: add implementation
  }
}

export class MagicWand {
  speed = 2;
  damage = 8;
  attack (monster) {
    // todo: add implementation
  }
}

export class Hero {
  constructor(name) {
    this.name = name;
    // todo: add implementation
  }

  hit (monster) {
    // todo: add implementation
  }
}

export class Monster {
  constructor(armor = 0) {
    this.armor = armor;
  }
}
