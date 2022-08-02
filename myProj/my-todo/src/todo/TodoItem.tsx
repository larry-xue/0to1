import React, { FC } from 'react';

export interface Todo {
  status: boolean;
  todo: string;
}

const TodoItem: FC<Todo> = (todo: Todo) => <div>{todo.todo}</div>;

export default TodoItem;
