// import { Component, } from "react";
import Merge from "./MultipleComponent";
import Shop from "./pages/Shop";



// class App extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <div>hello g</div>
//     )
//   }

// }
// export class App2 extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <div>hello g App2</div>
//     )
//   }

// }
// export class App3 extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <div>hello g App3</div>
//     )
//   }

// }

// export default App





/// class COmponent
/// aik file mai  multiple name export or aik default export
/// jsx --- one parent (compulsory)

// life cycle method ---- class component

// ComponentDidMount()  /// create
// ComponentDidUpdate()  /// update
// ComponentWillUnmount()  /// destsroy
// setState() ---- use to update state in class component







// useEffect()  


// import React from "react"

// function App() {
//   return (

//     <>


//       <div>Hello React</div>
//       <div>Hello React</div>
//       <div>Hello React</div>
//       <div>Hello React</div>


//     </>


    // <React.Fragment>


    //   <div>Hello React</div>
    //   <div>Hello React</div>
    //   <div>Hello React</div>
    //   <div>Hello React</div>


    // </React.Fragment>

    // <div>
    // <div>Hello React</div>
    // <div>Hello React</div>
    // <div>Hello React</div>
    // <div>Hello React</div>
    // </div>
//   )
// }

// export default App




///////////////////////////////// class 3



function App (){


  return (
    <>
          <h3>{process.env.REACT_APP_KEY} {process.env.REACT_APP_NAME}</h3>

    <h1 className="text-[#584db8]"  >Test Tailwind</h1>
   <h1 className="myDiv" style={{color:"white", backgroundColor:"blue"}} >Helo</h1>
   <Shop />
   <Merge/>
    </>
  )
}

export default App;