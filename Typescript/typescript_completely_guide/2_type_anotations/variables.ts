const apples: number = 2;
let speed: string = 'fast';
// 在定义时初始化，ts会自动推断变量的类型
let hasName = false;
let nothingMush: null = null;
let nothing: undefined = undefined;

// built in object
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green'];
let truths: boolean[] = [true, false, true];

// Classes
class Car {}

let car: Car;

// Object literal
let point: {
  x: number;
  y: number;
} = {
  x: 19,
  y: 2,
};

// Function
const logNumber: (i: number) => void = (i: number) => console.log(i);

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

let words = ['blue', 'green', 'red'];
let foundWord: boolean;

for (let word of words) {
  if (word === 'green') {
    foundWord = true;
  }
}

let numbers = [-1, -2, 3];
let numberAboveZero: boolean | number = false;

for (let number of numbers) {
  if (number > 0) numberAboveZero = number;
}
