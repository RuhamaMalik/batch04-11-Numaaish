// function customIterator(arr) {

// return {
//     [Symbol.iterator](){ // iterable
//         let index = 0;

//         let iterator = { // iterator
//           next() {
//             if (index < arr.length) {
//               return {
//                 value: arr[index++],
//                 done: false,
//               };
//             } else {
//               return {
//                 done: true,
//               };
//             }
//           },
//         };
//         return iterator;
      
//     }
// }

// }  



// let result = customIterator(["apple", "banana", "Mango"]);

// let final = result[Symbol.iterator]();

// console.log(final.next());



// for(let ele of result ){
// console.log(ele);

// }


///////////////////////////////////////// 

// function* myGen() {
// let result = [
//     yield, yield,yield
// ];

// console.log(result);


// }

// let generator = myGen();
// generator.next();                              
// generator.next(10);
// generator.next(20);
// generator.next(30);  
// generator.next(40);
// generator.next(50);
// generator.next(60);
// generator.next(70);
// generator.next(80);



