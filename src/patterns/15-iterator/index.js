export class Range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  forEach (callback) {
    this.getRange().forEach(callback);
  }

  getRange () {
    const res = [];
    for (let i = this.start; i <= this.end; i++) {
      res.push(i);
    }

    return res;
  }
}

