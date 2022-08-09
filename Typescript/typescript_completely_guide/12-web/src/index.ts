import { Collections } from './models/Collections';
import { User } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'azoux 123', age: 12 });
// const collection = Collections.buildUserCollection();
// collection.on('change', () => {
//   console.log(collection);
// });
// collection.fetch();

const root = document.getElementById('root');
if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
}
