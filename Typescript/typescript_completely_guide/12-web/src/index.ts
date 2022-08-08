import { Collections } from './models/Collections';
import { UserForm } from './views/UserForm';

// const user = User.buildUser({ id: 1 });
// user.fetch();
// user.on('change', () => {
//   console.log(user);
// });
// const collection = Collections.buildUserCollection();
// collection.on('change', () => {
//   console.log(collection);
// });
// collection.fetch();

const root = document.getElementById('root');
if (root) {
  const userForm = new UserForm(root);
  userForm.render();
}
