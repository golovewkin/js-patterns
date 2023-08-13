import { Hero, Memento } from './index.js';

describe('patterns/memento', () => {
  let memento;
  let hero;

  beforeEach(() => {
    hero = new Hero('Superman');
    memento = new Memento(hero);
  });

  afterEach(() => {
    memento = null;
    hero = null;
  });

  it('should be able to store the object state', () => {
    const snapshot1 = memento.save();

    hero.addSkill('fly');
    hero.increaseLevel();

    expect(hero.state.skills.includes('fly')). toBeTruthy();
    expect(hero.state.level).toBe(2);

    memento.load(snapshot1);

    expect(hero.state.skills.includes('fly')).toBeFalsy();
    expect(hero.state.level).toBe(1);
  });
});
