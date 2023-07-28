import chainOfResponsibility from './index.js';

describe('patterns/chainOfResponsibility', () => {
  it('should be able to validate string', () => {
    expect(chainOfResponsibility.validate('str'))
      .toBe('Validation rule "min-length" didn\'t pass for string "str"');

    expect(chainOfResponsibility.validate('some string'))
      .toBe('Validation rule "numbers" didn\'t pass for string "some string"');

    expect(chainOfResponsibility.validate('some string with number: 1'))
      .toBe('Validation rule "capital-letters" didn\'t pass for string "some string with number: 1"');

    expect(chainOfResponsibility.validate('some string with number: 1 and CAPITAL letters'))
      .toBeUndefined();
  });
});
