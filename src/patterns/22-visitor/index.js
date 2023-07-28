export class Visitor {
  constructor(compositeItem) {
    this.compositeItem = compositeItem;
    this.init();
  }

  init () {
    this.addGetSize();

    // todo: add implementation
  }

  addGetSize () {
    // todo: add implementation
  }
}

export class Comment {
  constructor({
    id = '',
    content = '',
    children = []
  } = {}) {
    this.id = id;
    this.content = content;
    this.children = children;
  }

  accept (Visitor) {
    new Visitor(this);
  }
}
