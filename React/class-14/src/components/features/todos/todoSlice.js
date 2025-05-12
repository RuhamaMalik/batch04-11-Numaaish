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
        updateTask: (state, action) => {

            const updatedTodos = state.todos.map((todo, i) => {
                return todo?.id === action?.payload?.id ? { ...todo, text: action?.payload?.text } : todo
            });

            state.todos = updatedTodos;
            localStorage?.setItem("todos", JSON.stringify(state.todos))
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

export const { addTask, deleteTask, addAllTasks, deleteAllTaks, updateTask } = todoSlice.actions;

export default todoSlice.reducer;

//  state [{}]
// item2 {} =   state.todos.filter(todo=> todo.id === action.payload )