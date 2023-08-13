//TODO implement
class State {
  currentState;
  constructor(clock) {
    this.currentState = new UnLocked(clock);
  }

  toggle(combination){
    this.currentState = this.currentState.toggle(combination);
  }

  get status(){
    return this.currentState.status;
  }
}

class UnLocked {
  status = 'unlocked';
  constructor(clock) {
    this.clock = clock;
  }
  toggle(combination){
    if(combination === 'wrong-combination'){
      this.clock.key = combination;
      return new Locked(this.clock);
    }
  }
}

class Locked {
  status = 'locked';
  constructor(clock) {
    this.clock = clock;
  }
  toggle(combination){
    if(combination !== 'wrong-combination'){
      this.clock.key = combination;
      return new UnLocked(this.clock);
    }
  }
}

export class DigitalLock {
  constructor(key = "") {
    this.key = key;
    this.state = new State(this);
    this.state.toggle(key);
  }

  toggle (combination = '') {
    this.state.toggle(combination);
  }
}
