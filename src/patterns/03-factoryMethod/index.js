class Input {
  element = {};

  create () {
    // Abstract method
  }
}

export class TextInput extends Input {
  // todo: implement logic
}

export class NumberInput extends Input {
  // todo: implement logic
}

export class EmailInput extends Input {
  // todo: implement logic
}

export const inputFactory = (type = '') => {
  // todo: implement logic
};
