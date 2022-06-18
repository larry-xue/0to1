const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];
type User = {
  name: string;
};

const pepsi: Drink = ['brown', true, 40];
// pepsi[2] = 'a';
