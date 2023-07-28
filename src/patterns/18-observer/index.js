export class NewsChannel {
  users = [];

  subscribe (user) {
    // todo: add implementation
  }

  notify (message = '') {
    // todo: add implementation
  }
}

export class User {
  messagesHistory = [];

  constructor(name) {
    this.name = name;
  }

  receiveMessage (message = '') {
    // todo: add implementation
  }
}
