import { FINISH_TODO, ADD_TODO, DELETE_TODO, EDIT_TODO  } from '../constants/actions'

export default function todoReducer(state = [], action) {
    if (action.type == ADD_TODO) {
        let todoText = action.payload.todoText
        return [...state, {id: state.length === 0 ? 1 : state[state.length - 1].id + 1, todoData: todoText, finished: false}]
    } else if (action.type == EDIT_TODO) {
        let todo = action.payload.todo
        let todoText = action.payload.todoText
        const updatedList = state.map(ele => {
            if(ele.id == todo.id){
              ele.todoData = todoText
            }
            return ele
        })
        return [...updatedList]        
    } else if (action.type == DELETE_TODO) {
        let todo = action.payload.todo
        const updatedList = state.filter(e => e.id != todo.id)
        return [...updatedList]                
    } else if (action.type == FINISH_TODO) {
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