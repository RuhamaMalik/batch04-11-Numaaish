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
            const todo = {
                id: nanoid(),
                text: action.payload
            }

            state.todos.push(todo);
            localStorage?.setItem("todos", JSON.stringify(state.todos))



        },
        addAllTasks: (state, action) => {
            state.todos = [...action.payload]
        },
        deleteTask: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
            localStorage?.setItem("todos", JSON.stringify(state.todos))

        },
        deleteAllTaks: (state, action) => {
            state.todos = []
            localStorage.removeItem("todos")
        }
    }
})

export const { addTask, deleteTask, addAllTasks ,deleteAllTaks} = todoSlice.actions;

export default todoSlice.reducer;

//  state [{}]
// item2 {} =   state.todos.filter(todo=> todo.id === action.payload )