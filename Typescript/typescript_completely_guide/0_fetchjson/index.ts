import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  title: string;
  id: number;
  completed: boolean;
}

// why we use ts ?
// because we can find errors before we run it.
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    The title is: ${title}
    is it finished? ${completed}
  `);
};

axios.get(url).then((responce) => {
  const todo = responce.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});
