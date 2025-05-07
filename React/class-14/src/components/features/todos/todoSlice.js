import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    // todos: [{ id: 1, text: "my task 1" }]
    todos: []
}


const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: { 
        addTask: (state, action) => {
            const todo ={
                id:nanoid,
                text: action.payload
            }

            state.todos.push(todo);

        },
        deleteTask:(state, action)=>{
            state.todos =   state.todos.filter(todo=> todo.id !== action.payload )
         

        }
    }
})

export const {addTask,deleteTask} = todoSlice.actions;

export default todoSlice.reducer;

 //  state [{}]
  // item2 {} =   state.todos.filter(todo=> todo.id === action.payload )