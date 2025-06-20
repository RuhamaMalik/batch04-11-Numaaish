const express = require('express')
const db = require("./db");
const app = express()
const port = 8000;


// app.get('/', (req, res) => res.send('Hello World!'))

// const createProduct = async ()=>{
//     const productRef = (await db()).collection("products");
//     const result = await productRef.insertOne({
//         name:"Shampoo",
//         brand:"saeed ghani",
//         price: 450,
//         quantity:5,
//         delivery: 5,
//         isAvailable:true
//      })
//      console.log(result);
     
// }

// createProduct()



// const createUser = async ()=>{
//     const userRef = (await db()).collection("users");
//     const result = await userRef.insertOne({
//         name:"Hajra",
//         role:"manager",
//         status:"unblock",
//         email:"hajra@gmail.com",
//         password:"090078601",
//         gender:"female"
//      })

//     //     const result = await userRef.insertMany([
//     //         {
//     //     name:"Haider Ali",
//     //     role:"bhanja",
//     //     status:"unblock",
//     //     email:"haider@gmail.com",
//     //     password:"7890",
//     //     gender:"male"
//     //  },
//     //  {
//     //     name:"Yusma",
//     //     role:"manager",
//     //     status:"unblock",
//     //     email:"yusma@gmail.com",
//     //     password:"0987654321",
//     //     gender:"female"
//     //  },
//     //  {
//     //     name:"Abiha Fatima",
//     //     role:"bhatiji",
//     //     status:"unblock",
//     //     email:"abiha@gmail.com",
//     //     password:"12345",
//     //     gender:"female"
//     //  }
//     // ])

//      if(result.acknowledged){
//         console.log("data inserted!");
        
//      }
     
// }

// createUser()


// const updateUser = async ()=>{
// const userRef = (await db()).collection("users");
// // const result = await userRef.updateOne(
// //     {role:"bhanja"},
// //     {
// //         $set:{role:"manager"}
// //     }
// // );


// const result = await userRef.updateMany(
//     {role:"manager"},
//     {
//         $set:{language:"pashto"}
//     }
// );


// console.log(result);

// }
// updateUser();


////// delete

const deleteUser = async ()=>{
      const userRef = (await db()).collection("users");
    //   const result = await userRef.deleteOne(
    //     {name:"Hajra"}
    //   )


    const result = await userRef.deleteMany({role:"manager"})
      console.log(result);
      
}

deleteUser();


app.listen(port, () => console.log(`Example app listening on port ${port}!`))