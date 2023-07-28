import { NewsChannel, User } from './index.js';

describe('patterns/observer', () => {
  it('should be able to notify every subscriber', () => {
    const channel = new NewsChannel();
    const john = new User('John');
    const peter = new User("Peter");

    channel.subscribe(john);
    channel.subscribe(peter);

    channel.notify("hello everyone");

    expect(john.messagesHistory.at(-1)).toBe("hello everyone");
    expect(peter.messagesHistory.at(-1)).toBe("hello everyone");
  });
});
