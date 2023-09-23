import { ADD_TODO, DELETE_TODO, EDIT_TODO, FINISH_TODO } from "../constants/actions"

export const todoFinished = (todo, isFinished) => ({type: FINISH_TODO, payload: {todo, isFinished}})
export const addTodo = (todo) => ({type: ADD_TODO, payload: {todoText: todo}})
export const deleteTodo = (todo) => ({type: DELETE_TODO, payload: {todo}})
export const editTodo = (todo, modifiedTodo) => ({type: EDIT_TODO, payload: {todo, todoText: modifiedTodo}})
