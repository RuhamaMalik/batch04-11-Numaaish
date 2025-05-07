import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./components/features/todos/todoSlice"


export const store = configureStore(
{
    reducer: todoReducer
}
)






// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./components/features/todos/todoSlice"


// export const store = configureStore(
// {
//     reducer:{
//         todo:todoReducer,
//         cart:todoReducer,
//     }
// }
// )