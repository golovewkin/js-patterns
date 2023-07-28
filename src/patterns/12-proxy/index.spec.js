import { ProxyUser, User } from './index.js';

describe('patterns/proxy', () => {
  it('should be able to intercept request to the original object', () => {
    const john = new ProxyUser(new User("John Doe", ["admin"]));
    const peter = new ProxyUser(new User("Peter Parker", []));

    expect(john.write()).toBe("write something to repo");
    expect(peter.write()).toBe("user does not have permissions to write");
  });
});
