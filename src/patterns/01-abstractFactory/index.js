export class SuccessButton {}
export class ErrorButton {}
export class SuccessNotification {}
export class ErrorNotification {}

export class SuccessControl {
  create (type = '') {
    switch (type) {
      case 'notification':
        return new SuccessNotification();
      case 'button':
        return new SuccessButton();
      default:
        throw new Error('type is unknown');
    }
  }
}

export class ErrorControl {
  create (type = '') {
    switch (type) {
      case 'notification':
        return new ErrorNotification();
      case 'button':
        return new ErrorButton();
      default:
        throw new Error('type is unknown');
    }
  }
}

export default class ControlsFactory {
  getFactory (factoryType) {
    switch (factoryType) {
      case 'success':
        return new SuccessControl();
      case 'error':
        return new ErrorControl();
      default:
        throw new Error('factoryType is unknown');
    }

  }
}
