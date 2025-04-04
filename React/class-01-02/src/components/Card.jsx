// import React from 'react'

// const Card = (props) => {
// // const Card = ({name, description, username, age}) => {
//     // console.log(">>>> " ,props);
    

//     // let user = {
//     //   name:"Rhama",
//     //   email:"abc@"
//     //     }

//     //     let{name,email}= user
//   return (
//     <>
//     <hr />
//     <div>Card  </div>

//        {/* <h3>{props?.name || "Product Name"}</h3>     }
//         <h3>{props?.description}</h3> */}


//        {/* <h3>{username}</h3> 
//        <h3>{age}</h3> 
//        <h3>{name || "Product Name"}</h3>      
//         <h3>{description}</h3> */}
//     <hr />
//     </>
//   )
// }

// export default Card





import React from 'react'

const Card = (props) => {
  return (
    <>
    <hr />
          <h1>My Card</h1>
          {props.username}
          {props.children}
          <hr />
    </>
  )
}

export default Card