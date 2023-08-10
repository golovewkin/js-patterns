class Monster {
  constructor(monstersSettings = {}) {
    this.settings = monstersSettings;
  }
}

export default class Location {
  monsters = [];
  monstersSettings = {};

  constructor(name = '', monstersCount = 0, monstersSettings = {}) {
    this.name = name;
    this.monstersSettings = monstersSettings;
    this.monsters = this.initMonsters(monstersCount, monstersSettings);
  }

  initMonsters (monstersCount = 0, monstersSettings = {}) {
    const monster = new Monster(monstersSettings);
    return Array(monstersCount).fill(monster);
  }

  clone () {
    const clone = new Location(this.name)
    clone.monsters = [...this.monsters];
    return clone;
  }

  setMonstersSettings(monstersSettings) {
    this.monstersSettings = monstersSettings;
    this.monsters = this.initMonsters(this.monsters.length, monstersSettings);
  }
}
