@classDecorator
class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logErrorFactory('!error message!')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed === 'fast') console.log('swish');
    else console.log('nothing');
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  console.log(target[key]);
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

function parameterDecorator(target: any, key: string, index: number): void {
  console.log(target, key, index);
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

// new Boat().pilot();
