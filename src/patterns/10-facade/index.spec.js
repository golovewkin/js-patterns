import { Game } from './index.js';

describe('patterns/facade', () => {
  it('should be able to initialize all game objects', () => {
    const game = new Game();

    game.start();

    expect(game.hero.name).toBe('Barbarian');
    expect(game.location.name).toBe('darkForest');
    expect(game.location.monsters.length).toBe(3);
    expect(game.location.monsters.filter(monster => monster.type === 'demon').length).toBe(2);
    expect(game.location.monsters.filter(monster => monster.type === 'undead').length).toBe(1);
  });
});
