// import { useContext } from "react";
import Todo from "../Todo/Todo";
// import { TodoContext } from "../../context/TodoContext";
import { useDispatch, useSelector } from 'react-redux'

const TodoList = ({todoFinished, deleteTodo, editTodo}) => {
  // const { list, dispatch } = useContext(TodoContext)
  // console.log(list)
  
  // const dispatch = useDispatch()

  const list = useSelector(state => state.todo)
  console.log(list)
  
  function onFinished(todo, isFinished) {
    /*
    const updatedList = list.map(ele => {
      if(ele.id == todo.id){
        ele.finished = isFinished
      }
      return ele
    })
    setList(updatedList)
    */
    // dispatch({type: 'finish_todo', payload: {todo, isFinished}})
    todoFinished(todo, isFinished)
  }
  
  function onDelete(todo) {
    /*
    const updatedList = list.filter(e => e.id != todo.id)
    setList(updatedList)
    */
    // dispatch({type: 'delete_todo', payload: {todo}})
    deleteTodo(todo)
  }

  function onEdit(todo, modifiedTodo) {
    /*
    const updatedList = list.map(ele => {
      if(ele.id == todo.id){
        ele.todoData = modifiedTodo
      }
      return ele
    })
    setList(updatedList)
    */    
    // dispatch({type: 'edit_todo', payload: {todo, todoText: modifiedTodo}})
    editTodo(todo, modifiedTodo)
  }
  

  return (
    <div>
      {
        list.length > 0 && 
        list.map((todo) => ( 
          <Todo 
            key={todo.id} 
            id={todo.id} 
            todo={todo.todoData} 
            isFinished={todo.finished} 
            changeFinished={(isFinished) => onFinished(todo, isFinished)}
            onDelete={() => onDelete(todo)}
            onEdit={(modifiedTodo) => onEdit(todo, modifiedTodo)}
          />
        ))}
    </div>
  )
}

export default TodoList
