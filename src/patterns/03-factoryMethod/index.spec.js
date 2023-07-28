import { inputFactory, TextInput, NumberInput, EmailInput } from './index.js';

describe('patterns/factoryMethod', () => {
  it('should be abel to create text type input element', () => {
    expect(inputFactory('text') instanceof TextInput). toBeTruthy();
  });

  it('should be abel to create number type input element', () => {
    expect(inputFactory('number') instanceof NumberInput). toBeTruthy();
  });

  it('should be abel to create email type input element', () => {
    expect(inputFactory('email') instanceof EmailInput). toBeTruthy();
  });
});
