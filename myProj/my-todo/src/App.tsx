import React, { FC } from 'react';
import { Button } from 'antd';
import './App.css';
import TodoList from './todo/TodoList';

const App: FC = () => (
  <div className='App'>
    <TodoList></TodoList>
  </div>
);

export default App;
