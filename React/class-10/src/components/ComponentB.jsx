import React from 'react'
import ComponentC from './ComponentC'
import { theme } from '../App'

const ComponentB = () => {
    return (
        <>
            <h1>ComponentB</h1>
            <ComponentC />



            {/* <theme.Consumer>
                {
                    (theme) => (
                        <>
                            <h1>Component B theme {theme}</h1>
                        </>
                    )
                }

            </theme.Consumer> */}
        </>
    )
}

export default ComponentB