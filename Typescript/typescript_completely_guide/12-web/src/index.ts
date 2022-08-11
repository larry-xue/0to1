import { Collections } from './models/Collections';
import { User } from './models/User';
import { UserEdit } from './views/UserEdit';

const user = User.buildUser({ name: 'azoux 123', age: 12 });
// const collection = Collections.buildUserCollection();
// collection.on('change', () => {
//   console.log(collection);
// });
// collection.fetch();

const root = document.getElementById('root');
if (root) {
  const userEdit = new UserEdit(root, user);
  console.log(userEdit);

  userEdit.render();
}
