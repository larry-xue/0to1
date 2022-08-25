class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logErrorFactory('!error message!')
  pilot(): void {
    console.log('swish');
    throw new Error('test err');
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;

  desc.value = function () {
    try {
      method();
    } catch (e) {
      console.log(e);
      console.log('oops!');
    }
  };
}

// decorator factory
function logErrorFactory(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
        console.log('oops!');
      }
    };
  };
}

new Boat().pilot();
