import React, { useMemo, useState } from 'react'

const LearnUseMemo = () => {
    const [count, setCount] = useState(0)
    const [minus, setMinus] = useState(1000)

    const handleIncreament = () => {
        setCount(count + 1)
    }
    const handleDecreament = () => {
        setMinus(minus - 1)
    }

    const multiple = useMemo(
        () => {
            console.log("hello world");

            return count * 10
        },
        [count]
    )

    return (
        <div>LearnUseMemo tfh
            <h1>{count}</h1>
            <button onClick={handleIncreament} >ADD</button>
             {/* {multiple()} */}
             {multiple}
            <h1>{minus}</h1>

            <button onClick={handleDecreament} >SUBTRACT</button>


        </div>
    )
}

export default LearnUseMemo