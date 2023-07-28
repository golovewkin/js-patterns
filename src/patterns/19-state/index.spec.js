import { DigitalLock } from './index.js';

describe('patterns/state', () => {
  it('should not unlock with wrong combination', () => {
    const lock = new DigitalLock("secret-combination");

    lock.toggle("wrong-combination");

    expect(lock.state.status).toBe("locked");
  });

  it('should unlock with right combination', () => {
    const lock = new DigitalLock("secret-combination");

    lock.toggle("secret-combination");

    expect(lock.state.status).toBe("unlocked");
  });

  it('should be able to change combination in unlocked state', () => {
    const lock = new DigitalLock("secret-combination");

    lock.toggle("secret-combination");
    lock.toggle("new-combination");

    expect(lock.state.status).toBe("locked");

    lock.toggle("new-combination");

    expect(lock.state.status).toBe("unlocked");
  });
});
