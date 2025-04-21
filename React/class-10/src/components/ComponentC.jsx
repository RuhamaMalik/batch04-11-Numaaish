import React, { useContext } from 'react'
import { theme , data} from '../App'
import ComponentD from './ComponentD'

const ComponentC = () => {
const myThem = useContext(theme)
const user = useContext(data)


  return (
   <>
         <h1>ComponentC {user.name}</h1>
         <h1>ComponentC {myThem}</h1>
         <ComponentD/>
         </>
  )
}

export default ComponentC