import './App.css'
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList'
// import { TodoProvider } from './context/TodoContext';
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { addTodo, deleteTodo, editTodo, todoFinished } from './actions/todoActions';

function App() {
  const dispatch = useDispatch()
  const actions = bindActionCreators({todoFinished, addTodo, deleteTodo, editTodo}, dispatch)
  
  return (
    <>
      {/* <TodoProvider> */}
        <AddTodo addTodo={actions.addTodo} />
        <TodoList deleteTodo={actions.deleteTodo} editTodo={actions.editTodo} todoFinished={actions.todoFinished} /> 
      {/* </TodoProvider> */}
    </>
  )
}

export default App
