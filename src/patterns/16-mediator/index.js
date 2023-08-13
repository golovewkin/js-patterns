//TODO implement v2
export class BillSharing {
  participants = [];
  balance = 0;

  constructor(price = 0) {
    this.price = price;
  }

  addParticipant (participant) {
    this.participants.push(participant);
  }

  getPaymentAmount() {
    return this.price / this.participants.length;
  }

  pay (amount = 0) {
    this.balance += amount;
  }

  share () {
    const paymentAmount = this.getPaymentAmount();
    this.participants.forEach(participant => {
      if(participant.cash >= paymentAmount) {
        this.pay(participant.pay(paymentAmount));
      } else {
        this.borrow(paymentAmount - participant.cash, participant.name);
      }
    });
  }

  borrow (amount = 0, borrowerName) {
    const borrowAmount = amount / this.participants.length;
    const borrower = this.participants.find(participant => participant.name === borrowerName);
    this.participants.forEach(participant => {
      if(participant.name === borrowerName ) {
        return;
      }

      if(participant.cash >= borrowAmount) {
        borrower.cash = borrower.cash + borrowAmount;
        participant.cash = participant.cash - borrowAmount;
      } else {
        // TODO
      }
    })
  }
}

export class User {
  constructor(name = '', cash = 0, billSharing) {
    this.name = name;
    this.cash = cash;
  }

  pay (paymentAmount) {
    this.cash = this.cash - paymentAmount;
    return this.cash;
  }
}
