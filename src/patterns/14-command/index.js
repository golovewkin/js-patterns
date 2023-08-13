export class NextPage {
  pagination;
  constructor(pagination) {
    this.pagination = pagination;
  }
  execute () {
    this.pagination.nextPage();
  }
}

export class PrevPage {
  pagination;
  constructor(pagination) {
    this.pagination = pagination;
  }
  execute () {
    this.pagination.prevPage();
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
  command;
  constructor (command) {
    this.command = command;
  }

  click () {
    this.command.execute();
  }
}
