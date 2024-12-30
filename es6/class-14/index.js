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

fetch("https://dummyjson.com/recipes").then(
    (res)=> res.json()
).then(
    (data)=> console.log(data.recipes)
    
).catch(
    (err)=> console.log(err)
    
)