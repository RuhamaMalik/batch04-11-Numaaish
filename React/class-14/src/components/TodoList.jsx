import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAllTaks, deleteTask } from './features/todos/todoSlice'

const TodoList = () => {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)
  const [task, setTask] = useState("")
  // const [edit , setEdit] = useState(false)
  const [edit, setEdit] = useState({ id: "", status: false })


  // console.log(todos);
  return (
    <>


      <div className="relative overflow-x-auto mx-auto my-[5vh] shadow-md sm:rounded-lg max-w-[800px]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Todo Id
              </th>
              <th scope="col" className="px-6 py-3">
                Task
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>

            {
              todos?.map((todo, index) => (
                <tr key={todo.id + index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {todo?.id}
                  </th>
                  {console.log(edit.id !== todo?.id)}
                  <td className="px-6 py-4">
                    <input disabled={!edit.status && edit.id !== todo?.id} value={task} onChange={(e) => setTask(e.target.value)} type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add Task ..." required />

                    {/* {todo?.text} */}
                  </td>
                  <td className="px-6 py-4">
                    <button onClick={() => setEdit({ id: todo?.id, status: true })} className="font-medium px-4 text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                    <button onClick={() => dispatch(deleteTask(todo?.id))} className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                  </td>
                </tr>
              ))
            }


            <tr>

              <td className="px-6 py-4">
                <button onClick={() => dispatch(deleteAllTaks())} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete All</button>                </td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  )
}

export default TodoList