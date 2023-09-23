import { useState } from "react"
// import { TodoContext } from "../../context/TodoContext"


const AddTodo = ({ addTodo }) => {
  // const { dispatch } = useContext(TodoContext)
  const [todo, setTodo] = useState('')
  
  return (
    <div>
      <input type="text" 
        name="task" 
        id="task" 
        placeholder="Enter todo"
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <button 
        disabled={todo.length === 0} 
        onClick={()=>{
          addTodo(todo)
          // dispatch({type: 'add_todo', payload: {todoText: todo}})
          setTodo('')
        }}
      >Add</button>
    </div>
  )
}

export default AddTodo
