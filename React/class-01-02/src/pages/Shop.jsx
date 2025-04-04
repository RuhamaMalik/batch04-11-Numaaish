// import Card from '../components/Card'

// const Shop = () => {
    // let product1={
    //     name:"SHampoo", description:"Lorem ipsum, dolor sit amet, dolor sit amet " 
    // }
// let username = "Ruhama"
    
//   return (
//    <>
//     {/* <Card name="SHampoo" description ="Lorem ipsum, dolor sit amet" />
//    <Card name="Soap" description ="Lorem ipsum, dolor sit amet"/>
//    <Card name="Tooth pasteee" description ="Lorem ipsum, dolor sit amet"/> */}

// {/* <Card name={product1.name} description ={product1.description} /> */}

// {/* <Card {...product1} age={25} username={username} /> */}

//    </>
//   )
// }

// export default Shop





import Card from '../components/Card'

const Shop = () => {
    
    let product1={
        name:"SHampoo", description:"Lorem ipsum, dolor sit amet, dolor sit amet " 
    }
  return (
   <>
   <Card username="Ruhama">
   <h3>{product1?.name || "Product Name"}</h3>    
   <h3>{product1?.description}</h3>
   </Card>

   <Card>
   <h3>{ "Soap"}</h3>    
   <h3>{"Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,"}</h3>
   <p>Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,</p>
   </Card>

   </>
  )
}

export default Shop