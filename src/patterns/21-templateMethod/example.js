class Node {
    draw() {
        this.calculateSize();
        this.formatText();
        this.drawChildren();
    };

    calculateSize(){
        throw new Error('implement');
    };
    formatText(){
        throw new Error('implement');};
    drawChildren(){
        throw new Error('implement');};
}


class FabricNode extends Node {
     calculateSize() {};
     formatText() {};
     drawChildren() {};
}

class StorageNode extends Node {
     calculateSize() {};
     formatText() {};
     drawChildren() {};
}

const fabric = new FabricNode();

function draw(rootNode) {
    rootNode.draw();
}

draw(fabric);