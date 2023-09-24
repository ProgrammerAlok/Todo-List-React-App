import './App.css'
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList'
// import { TodoProvider } from './context/TodoContext';
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
// import { addTodo, deleteTodo, editTodo, todoFinished } from './actions/todoActions';
import todoReducer, { addTodo, deleteTodo, editTodo, todoFinished } from './slices/todoSlice';

function App() {
  const dispatch = useDispatch()
  const actions = bindActionCreators({todoFinished, addTodo, deleteTodo, editTodo}, dispatch)
  
  return (
    <>
      {/* <TodoProvider> */}
        <AddTodo addTodo={actions.addTodo} />
        {/* <AddTodo addTodo={addTodo} /> */}
        <TodoList deleteTodo={actions.deleteTodo} editTodo={actions.editTodo} todoFinished={actions.todoFinished} /> 
        {/* <TodoList deleteTodo={deleteTodo} editTodo={editTodo} todoFinished={todoFinished} />  */}
      {/* </TodoProvider> */}
    </>
  )
}

export default App
