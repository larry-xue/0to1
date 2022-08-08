import { Collections } from './models/Collections';

// const user = User.buildUser({ id: 1 });
// user.fetch();
// user.on('change', () => {
//   console.log(user);
// });
const collection = Collections.buildUserCollection();
collection.on('change', () => {
  console.log(collection);
});
collection.fetch();
