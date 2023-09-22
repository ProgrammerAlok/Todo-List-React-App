import { useContext, useState } from "react"
import { TodoContext } from "../../context/TodoContext"


const AddTodo = () => {
  const { list, setList } = useContext(TodoContext)
  const [inputText, setInputText] = useState('')
  
  return (
    <div>
      <input type="text" 
        name="task" 
        id="task" 
        placeholder="Enter todo"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
      />
      <button 
        disabled={inputText.length === 0} 
        onClick={()=>{
          setList([...list, {id: list.length+1, todoData: inputText, finished: false}])
          setInputText('')
        }}
      >Add</button>
    </div>
  )
}

export default AddTodo
