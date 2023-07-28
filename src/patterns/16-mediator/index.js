export class BillSharing {
  participants = [];
  balance = 0;

  constructor(price = 0) {
    this.price = price;
  }

  addParticipant (participant) {
    // todo: add implementation
  }

  getPaymentAmount() {
    return this.price / this.participants.length;
  }

  pay (amount = 0) {
    this.balance += amount;
  }

  share () {
    // todo: add implementation
  }

  borrow (amount = 0) {
    // todo: add implementation
  }
}

export class User {
  constructor(name = '', cash = 0, billSharing) {
    this.name = name;
    this.cash = cash;
    this.billSharing = billSharing;
  }

  pay () {
    // todo: add implementation
  }

  borrow (amount = 0) {
    // todo: add implementation
  }
}
