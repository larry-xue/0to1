const carMakers = ['ford', 'toyta', 'chevy'];
const date = [new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values
const car = carMakers.pop() || 'my car';
const myCar = carMakers[1];

// Prevent incompatible values
// carMakers.push(1);

// Help with 'map'
carMakers.map((car): string => car);

// Flexiable types
const importantDates: (Date | string)[] = [new Date()];
