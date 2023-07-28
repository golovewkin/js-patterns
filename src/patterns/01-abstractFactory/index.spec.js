import ControlsFactory,
{
  SuccessControl,
  ErrorControl,
  SuccessButton,
  ErrorButton,
  SuccessNotification,
  ErrorNotification
} from './index.js';

describe('patterns/abstractFactory', () => {
  it('should be able to create "success" and "error" factories', () => {
    const factory = new ControlsFactory();

    expect(factory.getFactory('success') instanceof SuccessControl).toBeTruthy();
    expect(factory.getFactory('error') instanceof ErrorControl).toBeTruthy();
  });

  it('should be able to create "success" notification and button', () => {
    const factory = new ControlsFactory();
    const successFactory = factory.getFactory('success');

    expect(successFactory.create('notification') instanceof SuccessNotification).toBeTruthy();
    expect(successFactory.create('button') instanceof SuccessButton).toBeTruthy();
  });

  it('should be able to create "error" notification and button', () => {
    const factory = new ControlsFactory();
    const errorFactory = factory.getFactory('error');

    expect(errorFactory.create('notification') instanceof ErrorNotification).toBeTruthy();
    expect(errorFactory.create('button') instanceof ErrorButton).toBeTruthy();
  });
});
