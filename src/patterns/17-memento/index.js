export class Memento {
  #snapshots = [];
  #hero
  constructor(hero) {
    this.#hero = hero;
  }

  save(snapshot){
    this.#snapshots.push(snapshot);
  }

  load(snapshot) {
    const snapshotData = snapshot.getSnapshotData();
    this.#hero.setLevel(snapshot.level);
    this.#hero.setSkills(snapshot.skills);
  }
}

export class Snapshot {
  #level;
  #skills;

  constructor(level, skills) {
    this.#level = level;
    this.#skills = skills;
  }

  getSnapshotData(){
    return {level: this.#level, skills: this.#skills};
  }
}

export class Hero {
  #name = '';

  #state = {
    level: 1,
    skills: [],
  };

  constructor(name = '', memento) {
    this.#name = name;
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

  setLevel (level) {
    this.#state.level = level;
  }

  setSkills (skills) {
    this.#state.skills = skills;
  }
}
