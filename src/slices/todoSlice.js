import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (todo, action) => {
            let todoText = action.payload.todoText
            todo.todoList.push({id: todo.todoList.length === 0 ? 1 : todo.todoList[todo.todoList.length - 1].id + 1, todoData: todoText, finished: false})
        },
        editTodo: (state, action) => {
            let todo = action.payload.todo
            let todoText = action.payload.todoText
            state.todoList = state.todoList.map(ele => {
                if(ele.id == todo.id){
                ele.todoData = todoText
                }
                return ele
            })
        },
        todoFinished: (state, action) => {
            let todo = action.payload.todo
            let isFinished = action.payload.isFinished
            state.todoList = state.todoList.map(ele => {
                if(ele.id == todo.id){
                    ele.finished = isFinished
                }
                return ele
            })
        },
        deleteTodo: (state, action) => {
            let todo = action.payload.todo
            state.todoList = state.todoList.filter(e => e.id != todo.id)
        },
    },
})

export default todoSlice.reducer

export const { addTodo, editTodo, deleteTodo, todoFinished } = todoSlice.actions