import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{ id: 1, text: "my task 1" }]
}


const todoSlice =createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTask: (state, action)=>{

        }
    }
})
