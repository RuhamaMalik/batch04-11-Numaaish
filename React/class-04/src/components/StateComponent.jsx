import React, { useState } from 'react'


const StateComponent = () => {

    // const [varToUse , FuncToUpdate] = useState(initialValue)
    const [count, setCount] = useState(0)

    let updateCount = ()=>{
        setCount(count+1)
    }
    console.log(count);


    ////////////////////// old
    // let count = 0

    // let updateCount = ()=>{
    //    count = count + 1
    //    console.log(count);
    // }

    

  return (
    <>
    
    <h1>Count {count}</h1>
    <button onClick={updateCount}  >UPDATE COUNT</button>
    </>
  )
}

export default StateComponent