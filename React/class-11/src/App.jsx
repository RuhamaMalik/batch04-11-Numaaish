import { createContext, useEffect, useState } from 'react'
import './App.css'
import AuthForm from "./components/AuthForm"
import LoginForm from './components/LoginForm'

const userContext = createContext()


function App() {
  const [user, setUser] = useState({})


  useEffect(() => {
    const curentUser = localStorage.getItem("user")
    setUser(JSON.parse(curentUser));

  }, [])


  return (
    <>
      <userContext.Provider value={{ user, setUser }}  >
        {/* <AuthForm /> */}

<h1 className='text-zinc-400  text-5xl  '   >Test Tilwind</h1>


        <LoginForm />


        <h1>{user?.name || ""}</h1>
        <h1>{user?.email || ""}</h1>

      </userContext.Provider>
    </>
  )
}

export default App
export { userContext }