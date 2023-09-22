export default function todoReducer(state, action) {
    if (action.type == 'add_todo') {
        let todoText = action.payload.todoText
        return [...state, {id: state.length+1, todoData: todoText, finished: false}]
    } else if (action.type == 'edit_todo') {
        let todo = action.payload.todo
        let todoText = action.payload.todoText
        const updatedList = state.map(ele => {
            if(ele.id == todo.id){
              ele.todoData = todoText
            }
            return ele
        })
        return [...updatedList]        
    } else if (action.type == 'delete_todo') {
        let todo = action.payload.todo
        const updatedList = state.filter(e => e.id != todo.id)
        return [...updatedList]                
    } else if (action.type == 'finish_todo') {
        let todo = action.payload.todo
        let isFinished = action.payload.isFinished
        const updatedList = state.map(ele => {
            if(ele.id == todo.id){
              ele.finished = isFinished
            }
            return ele
        })
        return [...updatedList]
    } else {
        return state
    }
}