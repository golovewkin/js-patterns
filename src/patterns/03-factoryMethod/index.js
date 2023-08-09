class Input {
  element = {};

  create () {
    // Abstract method
  }
}

export class TextInput extends Input {
  create () {

  }
}

export class NumberInput extends Input {
  create () {

  }
}

export class EmailInput extends Input {
  create () {

  }
}

export const inputFactory = (type = '') => {
  switch (type) {
    case 'text':
      return new TextInput();
    case 'number':
      return new NumberInput();
    case 'email':
      return new EmailInput();
    default:
      throw new Error('type is unknown');
  }
};
