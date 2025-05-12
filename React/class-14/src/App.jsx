// import About from "./components/About"

import React, { lazy, Suspense } from "react"
import "./loader.css";
const About = lazy(()=>import("./components/About"))


////////////// Lazy Loading


function App() {

  

  return (
    <>

<h1>My Awesome Heading ......</h1>


<Suspense fallback={<div className="loader"></div>}   >
  <About/>
  <About/>
  <About/>
  <About/>
  <About/>
</Suspense>

    </>
  )
}

export default App







// ////////////// Redux


// import { useEffect } from "react"
// import AddTodo from "./components/AddTodo"
// import TodoList from "./components/TodoList"
// import { useDispatch } from "react-redux"
// import { addAllTasks } from "./components/features/todos/todoSlice"


// function App() {
//   const dispatch = useDispatch()

//   useEffect(()=>{

// const allTasks = JSON.parse(localStorage?.getItem("todos")) || []
// dispatch(addAllTasks(allTasks))
// // console.log(allTasks);

//   },[])


//   return (
//     <>
//       <AddTodo/>
//       <TodoList/>

//     </>
//   )
// }

// export default App







// import { useState } from 'react'
// import LearnUseCallback from './LearnUseCallback'

// function App() {

//   return (
//     <>
//       {/* <h1 className='text-9xl bg-red-300'>Hello</h1> */}
//       <LearnUseCallback />

//     </>
//   )
// }

// export default App







