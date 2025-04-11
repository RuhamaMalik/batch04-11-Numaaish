import React, { useEffect, useState } from 'react'

const Hoook = () => {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)


    const [users, setUsers] = useState([])

    useEffect(() => {
        if(!(count > 1)){
            console.log("Hello");
        }
        
        // setCount(count + 1)

    },[count, count2])


    const UpdateCount = () => {
        if (count < 1) {
            setCount(count + 1)
        }
    }
    const UpdateCount2 = () => {
        setCount2(count2 + 1)
    }

    return (
        <>

            <h1>Hello From Hoook File</h1>

            {/* {users.map((user, index) => (
                <>
                    <div>{user?.name}</div>
                </>
            ))} */}



            <h1>{count}</h1>
            <button onClick={UpdateCount}>Update</button>



            <h1>{count2}</h1>
            <button onClick={UpdateCount2}>Update 2</button>
        </>
    )
}

export default Hoook