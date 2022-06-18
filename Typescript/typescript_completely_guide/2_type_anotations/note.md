# overview

- type annotations
  - we tell the ts what type of value a variable will refer to
- type inference
  - ts try to figure out what type a variable is.

# when to use annotations?

1. Function that return the 'any' type

```ts
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
```

2. When we declare a variable on one line and initalizate is later

```ts
let words = ['blue', 'green', 'red'];
let foundWord: boolean;

for (let word of words) {
  if (word === 'green') {
    foundWord = true;
  }
}
```

3. when we want a variable to have a type that can't be inferred correctly

```ts
let numbers = [-1, -2, 3];
let numberAboveZero: boolean | number = false;

for (let number of numbers) {
  if (number > 0) numberAboveZero = number;
}
```

`any` type means ts has no idea what's going on
