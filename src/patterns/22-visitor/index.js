//TODO implement v2
export class Visitor {
  constructor(compositeItem) {
    this.compositeItem = compositeItem;
    this.addGetSize();
  }

  addGetSize () {
    this.compositeItem.getSize = function (){
      return this.children.length;
    }
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
