import { Collections } from './models/Collections';
import { User } from './models/User';
import { UserEdit } from './views/UserEdit';
import { UserList } from './views/UserList';

// const user = User.buildUser({ name: 'azoux 123', age: 12 });
const collection = Collections.buildUserCollection();
collection.on('change', () => {
  const root = document.getElementById('root');
  console.log(collection);
  if (root) {
    const userList = new UserList(root, collection);
    console.log(userList);
    userList.render();
  } else console.warn('do not register root!');
});
collection.fetch();

// if (root) {
//   const userEdit = new UserEdit(root, user);
//   console.log(userEdit);

//   userEdit.render();
// }
