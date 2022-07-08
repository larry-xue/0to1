import { User } from './models/User';

const user = new User({
  name: 'azoux',
  age: 10,
});

user.set({ name: 'newname', age: 100 });

console.log(user.get('name'));
console.log(user.get('age'));
