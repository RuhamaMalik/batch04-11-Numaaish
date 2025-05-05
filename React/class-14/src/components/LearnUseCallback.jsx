import React, { useCallback, useState } from 'react'
import OtherComponent from './OtherComponent';

const LearnUseCallback = () => {
    const [add, setAdd] = useState(0);
    const [count, setCount] = useState(0);

    const doSomething = useCallback(
        () => {
            // some action
        }, [add]
    )

    return (
        <>

            <OtherComponent doSomething={doSomething} />


            <h1>   {count}</h1>
            <button onClick={() => setCount(count + 1)}>Count</button>



            <h1>   {add}</h1>
            <button onClick={() => setAdd(add + 1)}>Add</button>

        </>
    )
}

export default LearnUseCallback