import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = () => {
const todos = useSelector(state=> state.todos)

console.log(todos);
  return (
    <div>TodoList</div>
  )
}

export default TodoList