import { useContext } from "react";
import Todo from "../Todo/Todo";
import { TodoContext } from "../../context/TodoContext";


const TodoList = () => {
  const { list, setList } = useContext(TodoContext)
  console.log(list)

  // const handleChangeFinished = 

  return (
    <div>
      {
        list.length > 0 && 
        list.map(({id, todoData, finished}) => ( 
          <Todo 
            key={id} 
            id={id} 
            todo={todoData} 
            isFinished={finished} 
            changeFinished={(isFinished) => {
              const updatedList = list.map(ele => {
                if(ele.id == id){
                  ele.finished = isFinished
                }
                return ele
              })
              setList(updatedList)
            }}
            onDelete={() => {
              const updatedList = list.filter(e => e.id != id)
              setList(updatedList)
            }}
            onEdit={(modifiedTodo) => {
              const updatedList = list.map(ele => {
                if(ele.id == id){
                  ele.todoData = modifiedTodo
                }
                return ele
              })
              setList(updatedList)              
            }}
            />
            ))}
    </div>
  )
}

export default TodoList
