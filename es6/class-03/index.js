//////////////// string literals '' ""    -----------ES5
//////////////// Template literals ``    -----------ES6 (line break , use ${} to inject expression / variable , )

// var str = "mai kia likhun";

// let myStr = `maine
//                  likh
//                     liya`;

// let quantity = 3;
// let price = 10;

// var str = "Total amount " + " $" + quantity  * price  ;

// let myStr = `Total amount : $${quantity * price}`

// console.log(str);
// console.log(myStr);

// let quantity = +prompt("Enter quantity");
// let price = +prompt("Enter price");

// function calculateTotal(p, q){
// return p * q
// }

// console.log(`Total amount : $${calculateTotal(price, quantity)}.`);

///////////////// Recursion

// function doSomeThing (n){
// // console.log(n); // 3  2 1 0

// if(n === 0){
//     console.log(`Task Completed.`);

//     return;
// }
// console.log(`I am doing Something`);
//     doSomeThing (n-1)
// }

// doSomeThing (3)

///////////////////////////// Descending Array

// let descending = []; // 5 4 3 2

// function recursive(x) {
//   descending.push(x);

//   if (x <= 1) {
//     return;
//   }
//   recursive(x - 1); //  3
// }

// recursive(5);

// console.log(descending);


////////////////// 


// let ascending = []; // 5 4 3 2

// function recursive(x) {
//     ascending.push(x);

//   if (x >= 5) {
//     return;
//   }
//   recursive(x + 1); //  3
// }

// recursive(1);

// console.log(ascending);


let fName = ["Hajra", "Sana", "Aafreen", "Tuba"];
let lName = ["Asif", "Ahmed", "Yahya", "Jan"];

// let fullName = [];

// function createFullName (i){
// console.log(i); // 0 1 2 3
// fullName.push(`${fName[i]} ${lName[i]}`)
// if(i >= fName.length-1  ){
// return;
// }
//     createFullName (i + 1)
// }


// createFullName (0)
// console.log(fullName);

//////////////// DeStructuring  ([] / {})

//////// Array 

// let numbers = [1,2,3,4,5];
// var a = numbers[0]
// var b = numbers[1]
// var c = numbers[2]

// let [a,b,c,d,e] = numbers;
// console.log(c); //3
// console.log(a); //1


const person ={
    name : "Ruhama",
    age: 10
}

// const username = person.name;

const {name , age} = person;

console.log(name);
console.log(age);


////// spck code editor


