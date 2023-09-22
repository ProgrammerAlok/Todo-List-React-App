import { useState } from "react"

const Todo = ({ todo, isFinished, changeFinished, onDelete, onEdit }) => {
    const [finished, setFinished] = useState(isFinished)
    const [isEditing, setIsEditing] = useState(false)
    const [newInput, setNewInput] = useState(todo)

    return (
      <div>
        <input type="checkbox" name="cb" id="checkbox" checked={finished} onChange={(e)=>{
          setFinished(e.target.checked)
          changeFinished(e.target.checked)
        }} />
        {isEditing ? 
          <input 
            type="text" 
            value={newInput} 
            onChange={e => setNewInput(e.target.value)} 
          /> : 
          todo}
        <button 
          onClick={() => {
            setIsEditing(!isEditing)
            if(isEditing) { onEdit(newInput) }
          }}
        > {isEditing ? 'Save' : 'Edit'} </button>
        <button disabled={isEditing} onClick={onDelete} > Delete </button>
      </div>
    )
  }
  
  export default Todo
  