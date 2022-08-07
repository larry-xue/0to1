import { User } from './models/User';

const user = new User({ id: 1, name: 'azoux', age: 12 });

user.on('change', () => {
  console.log('user data change!');
});

user.set({ name: 'new Azoux!' });
