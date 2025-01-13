// function customIterator(arr) {
//   let index = 0;

//   let iterator = {
//     next() {
//       if (index < arr.length) {
//         return {
//           value: arr[index++],
//           done: false,
//         };
//       } else {
//         return {
//           done: true,
//         };
//       }
//     },
//   };
//   return iterator;
// }

// let result = customIterator(["Apple", "Banana", "Mango"]);
// // console.log(result.next());
// // console.log(result.next());
// // console.log(result.next());
// // console.log(result.next());
// let currentVal = result.next();
  

//////////////////// Generator

// function *myGen (){
//     console.log("First statement");
//     yield "Waiting  1"
//     console.log("Second statement");
//     //  yield "Waiting  2"
// }

// let generator = myGen();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

//////////////////////////////////

// function *myGen (){
//     console.log("hello ");
//     yield "Waiting  1"
//      yield "Waiting  2"
//      yield "Waiting  3"
// }

// let generator = myGen();

// for(let abc of generator){
// console.log(abc);

// }

//////////////////////////////////

// function* myGen() {
//   let num = 10;
//   while (true) {
//     yield num++;
//   }
// }

// let generator = myGen();
// // console.log(generator.next());
// // console.log(generator.next());
// // console.log(generator.next());
// // console.log(generator.next());

// for (let value of generator) {
//   if (value === 12) {
//     continue;
//   } else if (value <= 15) {
//     console.log(value);
//   } else {
//     break;
//   }

//   // if (value > 15) break;
//   // console.log(value);
// }

////////////////////////////////// Search


// function* myGen() {
// let result = yield  ;

// console.log(result);


// }

// let generator = myGen();
// generator.next()
// generator.next(10)
// generator.next()
// generator.next("Ruhama")






function* myGen() {
    yield "My Favourite fruits"
    yield*  ["Apple", "Banana", "Mango"] ;
    yield "yummy.........."

    }
    
    let generator = myGen();
//   console.log(generator.next());
//   console.log(generator.next());
//   console.log(generator.next());
//   console.log(generator.next());
//   console.log(generator.next());
//   console.log(generator.next());


console.log(generator.next().value);
console.log(generator.return("Function end").value);

console.log(generator.next().value);

// console.log([...generator]);

  
   
    