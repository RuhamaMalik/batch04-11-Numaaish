import React from 'react'

const PropDrilling = () => {
    const username = "Zulaikha"
    return (
        <>
            <div>PropDrilling</div>
            <A username={username} />
        </>
    )
}


export default PropDrilling







const A = ({username}) => {
    return (
        <>
            <h1>Component A</h1>
            <B username={username} />

        </>

    )
}

const B = ({username}) => {
    return (
        <>
            <h1>Component B</h1>
            <C  username={username} />
        </>
    )
}

const C = ({username}) => {
    return (
        <>
            <h1>Component C</h1>
            <D username={username} />
        </>
    )
}

const D = ( {username}) => {
    return (
        <h1>Component D {username} </h1>
    )
}
