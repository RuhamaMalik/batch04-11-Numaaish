// const myPromise = new Promise((resolve, reject) => {
//   let customError = true;
//   setTimeout(() => {
//     if (!customError) {
//       resolve({ name: "Ruhama", age: 10 });
//     } else {
//       reject("Something went wrong");
//     }
//   }, 2000);
// });

// myPromise
//   .then((user) => {
//     console.log(user);
//     return user.name;
//   })
//   .then((username) => {
//     console.log(username);

//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log("Start");  // 1

// const myFunc = async () => {
//   console.log("Inside Function");  // 2

//   let username = "Tuba";
//   return username;
// };

// let result = myFunc();

// console.log(result);  // tuba 3

// console.log("Happy Ending");  // 4

////////////////////////////////////

// const waitFor = () => {
//   return new Promise((resolve,reject) => setTimeout(reject("hello"), 5000));
// };

// const asyncFunction = async () => {
//   try {
//     console.log("Task Started");
//     let result = await waitFor();
//     console.log(result);
//     console.log("Task Finished");
//   } catch (error) {
//     // console.log(error);
//     throw new Error("My Custom Error message")
//   }
// };

// asyncFunction();
// console.log("dlfdlfd");

// const fetchData = async () =>{
//     try {
//        const result =  await fetch('https://dummyjson.com/recipes')
//        const data = await result.json()
//        console.log(data);

//     } catch (error) {
//         throw new Error("My Custom Error message")
//     }
// }

// fetchData()

// fetch("https://dummyjson.com/recipes").then(
//     (res)=> res.json()
// ).then(
//     (data)=> console.log(data.recipes)

// ).catch(
//     (err)=> console.log(err)

// )

/////////////////////// 

// const fetchUser = new Promise((res, rej) => {
// //   setTimeout(() => res("User Date Fetch Successfully"), 2000);
//   setTimeout(() => res({name:"User1"}), 2000);
// });

// const fetchProduct = new Promise((res, rej) => {
// //   setTimeout(() => res("Product Date Fetch Successfully"), 2000);
//   setTimeout(() => res({productName:"Shampoo"}), 2000);
// });

// const fetchOrder = new Promise((res, rej) => {
// //   setTimeout(() => res("Order Data Fetch Successfully"), 2000);
//   setTimeout(() => rej("Order  Fetch Failed"), 2000);
// });

// Promise.all([fetchUser, fetchProduct, fetchOrder]).then((results) => {
//   console.log("All Data Fetched");
//   console.log(results);
  
//   console.log("User Promise Data ", results[0]);
//   console.log("Product Promise Data ", results[1]);
//   console.log("Order Promise Data ", results[2]);
// }).catch(
//     (err)=>{
//         console.log(err);
//     }
// )
