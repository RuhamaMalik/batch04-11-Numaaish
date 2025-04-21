// import { data, theme } from "../App"

// const ComponentD = () => {
//     return (
//         <data.Consumer>

//             {
//                 ({ name, email, age }) => (
//                     <>
// <h1>Component D</h1>
// <h1>Hello {name}</h1>
//                     </>
//                 )
//             }
//         </data.Consumer>
//     )

// }

// export default ComponentD




















import { data, theme } from "../App"

const ComponentD = () => {
    return (
        <data.Consumer>

            {
                ({ name, email, age }) => (
                    <theme.Consumer>
                        {
                            (theme) => (
                                <>
                                    <h1>Component D</h1>
                                    <h1>Hello {name}</h1>
                                    <h1>Theme {theme}</h1>
                                </>
                            )
                        }
                    </theme.Consumer>
                )
            }
        </data.Consumer>
    )

}

export default ComponentD