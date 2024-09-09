// console.log("10" + 5 + 10);
// console.log(10 + 3 + "10" + 5 + 10);

//  Comparision Operators  (== , === , != , !== , < , > , <= , >=) return boolean

// == , !=    check value
// console.log(5 == 5); // true
// console.log(5 == '5'); // true

// console.log(105 != 99 ); //true
// console.log(5 != 5 ); // false

// // === ,  !== check value + check data type

// console.log(5 === 5); // true
// console.log(5 === '5'); // false

// console.log(5 !== '5' ); // true
// console.log(5 !== 5 ); // false

// < p >
// console.log(6 > 5); // true
// console.log(6 < 5); // false
// console.log(5 < 5); //

// console.log(5 <= 10);  // true
// console.log(5 <= 5);  // true
// console.log(5 <= 4);  // false

// console.log(6 >= 3); // true
// console.log(3 >= 6); // true

// ///////////////////  if

// if(condition(true)){
//     // code
// }

//  truthy values

// if(true){
//     console.log('true is truthy value');
// }

// if(1){
//     console.log('1 is truthy value');

// }
// if(" "){
//     console.log('space in string is truthy value');

// }
// if(6778){
//     console.log('number is truthy value');

// }
// if(-1){
//     console.log('-1 is truthy value');

// }

// if("false"){
//     console.log('false value in string is truthy value');

// }

//  falsy values

// if(false){
//     console.log('true is falsy value');

// }

// if(0){
//     console.log('0 is falsy value');

// }

// if(""){
//     console.log('empty string without space is falsy value');

// }

// if(null){
//     console.log('null is falsy value');

// }

// if(undefined){
//     console.log('undefined is falsy value');

// }

// console.log("kuch or");

// //////////////////////////////////////////////

// var isLoggedIn = true;
// if(isLoggedIn){
//     console.log("welcome to the Home page");

// }

// if(!isLoggedIn){
//     console.log("welcome to the Home page");

// }

// var city = prompt("What is the capital of Pakistan");
// var correctAns = "Islamabad";

// if (city === correctAns) {
//   console.log("Congratulations! , correct answer" );
// } else {
//     console.log("wrong answer !");
// }

// check number even or odd

// var isEven = +prompt("Enter a number");
// if (isEven % 2 === 0) {
//     //55/2 false
//     //54 /2 true
//   console.log("Even NUmber");
// } else {
//   console.log("Odd number");
// }

// if , else ,  else if
var userNumb = +prompt("Enter a number");

if (userNumb > 5) {
  alert("The number is greater than 5");
} 
else if (userNumb < 5) {
  alert("The number is less than 5");
}
else{
    alert("The number is equal to  5");
   
}
