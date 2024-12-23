////////// sync
////////// async

////////// sync
// console.log("Start");
// console.log("Processing");
// console.log("End");

////////// async

// console.log("Start");
// // setTimeout(()=>{
// //     console.log("Processing");

// // }, 3000);
// setTimeout(()=>{
//     console.log("Processing");

// }, 0);
// console.log("End");

// main()

// macro task queue

// javascript ka native engine asyn tasks ko perform karne
//  k liye browsers k features(e.g Web API, event loop ,
//  or callback queue  ) ka use karta hai.

// pyramid of Doom / callback hell

// ()=>()=>()=>()=>()=>

// let promise1 = new Promise((resolve, reject) => {
//   let result = true;
//   if (result) {
//     resolve({name:"Ruhama"});
//   } else {
//     reject();
//   }
// })

// promise1.then((data)=>{
// console.log(data);

// })

// console.log(promise1);

let promise2 = new Promise((resolve, reject) => {
  let error = false;

  setTimeout(() => {
    // console.log("Async task completed");

    if (!error) {
      resolve({name:"Ruhama"});
    } else {
      reject("ERROR : something went wrong");
    }
  }, 2000);
});

promise2.then((user) => {
  console.log("userData : ", user);
}).catch((err)=>{
console.log(err);

})


//modules 
// classes
// Map
