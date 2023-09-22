import { useState } from 'react';
import './App.css'
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList'
import { TodoProvider } from './context/TodoContext';

function App() {

  return (
    <TodoProvider>
      <AddTodo />
      <TodoList/> 
    </TodoProvider>
  )
}

export default App
