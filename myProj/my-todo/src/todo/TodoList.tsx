import React, { FC } from 'react';
import TodoItem from './TodoItem';
import { Todo } from './TodoItem';

const TodoList: FC<{}> = () => {
  const todos: Todo[] = [
    {
      todo: 'sleep',
      status: false,
    },
    {
      todo: 'working',
      status: false,
    },
    {
      todo: 'read',
      status: false,
    },
    {
      todo: 'walking',
      status: true,
    },
    {
      todo: 'coding',
      status: false,
    },
  ];
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo.todo} status={todo.status}></TodoItem>
      ))}
    </ul>
  );
};

export default TodoList;
