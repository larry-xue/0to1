class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<String>(['1', 'a']);

function print<T>(arr: T[]) {
  for (let i = 0; i < arr.length; i += 1) {
    console.log(arr[i]);
  }
}

print(['1', 'a', 'c', 2]);

class Cars {
  print(): void {
    console.log('this is a car');
  }
}

class House {
  print(): void {
    console.log('this is a house');
  }
}

interface Printable {
  print(): void;
}

function printCarsAndHouses<T extends Printable>(arr: T[]) {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].print();
  }
}

printCarsAndHouses([new House(), new Cars()]);
