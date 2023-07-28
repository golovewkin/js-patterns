// todo: make refactoring, use State pattern
class OldDigitalLock {
  state = {
    status: "locked",
    key: ""
  };

  constructor(key = '') {
    this.state.key = key;
  }

  toggle (combination = '') {
    if (this.state.status === "locked") {
      if (combination === this.state.key) {
        this.state.status = "unlocked";
      }
      return;
    }

    if (this.state.status === "unlocked") {
      if (combination) {
        this.state.key = combination;
      }

      this.state.status = "locked";
    }
  }
}

class Locked {
  // todo: add implementation
}

class Unlocked {
  // todo: add implementation
}

export class DigitalLock {
  constructor(key = "") {
    // todo: add implementation
  }

  toggle (combination = '') {
    // todo: add implementation
  }
}
