// import { createStore, combineReducers } from 'redux'

// Reducer imports
// import todoReducer from './reducers/todoReducer'

import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slices/todoSlice'

// const reducers = combineReducers({todo: todoReducer})

// const store = createStore(reducers)

const store = configureStore({
    reducer: {
        todo: todoReducer
    },
    // devTools: process.env.NODE_ENC !== 'production',
    devTools: true,
})

export default store