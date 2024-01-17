import todoReducer from '../Slices/todo/todoSlice'
import {configureStore} from '@reduxjs/toolkit'
export const store = configureStore({
    reducer:todoReducer
})