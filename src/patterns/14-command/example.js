class Editor {
    history = [];
    hasResources = true;
    queue = [];

    executeCommand(command) {
        if (this.hasResources) {
            command.execute()
            this.history.push(command);
        } else {
            this.queue.push(command);
        }
    }

    undo() {
        const lastCommand = this.history[this.history.length - 1];
        lastCommand.undo()
        this.history.length = this.history.length - 1;
    }
}

class Command {
    editor;
    undo() {

    }
    execute(){

    }
}

class CopyCommand {
    editor;
    execute() {

    }
}