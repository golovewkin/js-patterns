export class NextPage {
  execute () {
    // todo: add implementation
  }
}

export class PrevPage {
  execute () {
    // todo: add implementation
  }
}

export class Pagination {
  currentPage = 1;

  nextPage () {
    return this.currentPage += 1;
  }

  prevPage () {
    return this.currentPage -= 1;
  }
}

export class Button {
  constructor (command) {
    // todo: add implementation
  }

  click () {
    // todo: add implementation
  }
}
