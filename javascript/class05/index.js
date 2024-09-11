// var num = 2;
// // // num = num + 4;
// num += 4;

// console.log(num);

// var a = 2;
// a = 4;
// console.log(a);

// ((num > 2)    (num < 4) (num < 4) (num < 4))

// Logical Operators   (&&  , || )
// &&  and operator (all conditions true)
// || Or operator (any one  condition true)

//  &&

console.log(true && true); // true
console.log(true && false); // false
console.log(true && false && true); // false
console.log(false && true); // false
console.log("myString" && "undefined" && false); // false
console.log("myString" && undefined && "false"); // undefined

// ||

// console.log(true || false); // true
// console.log('myString' || undefined || true); // myString

// console.log(null || true && 'mystring' && false); // false
// console.log(undefined && (true || 'abcd')); // undefined

// a e i o u   A E I O U (VOWELS)
// CONSONANT

// var alpha = prompt("Enter an aplphabate");

// if (alpha === "a" || alpha === 'A' || alpha ===  "e" ||  alpha === 'E' || alpha ===  "i" || alpha ===  'I' || alpha ===  "o" || alpha ===  'O' || alpha ===  "u" || alpha ===  'U') {
//   alert("Vowel");
// }else{
//     alert("CONSONANT");

// }

// >= 80 A+
// >= 70 A
// >= 60 B
// >= 50 C
// >= 40 D
// Fail

// let score = +prompt("enter score");

//     if (score >= 80) {
//         console.log("A+");
//     }
//     else if (score >= 70) {
//         console.log("A");
//     }

//     else if (score >= 60) {
//         console.log("B");
//     }

//     else if (score >= 50) {
//         console.log("C");
//     }

//     else if (score >= 40) {
//         console.log("D");
//     }

//     else {
//         console.log("Fail")
//     }

//  nested if else

var email = "abcd@gmail.com";
var pswd = "12345";

var userEmail = prompt("Enter your email");

if (userEmail === email) {
  var userPswd = prompt("Enter your Password");
  if (userPswd === pswd) {
    alert("User Signed in");
  }
} else {
  alert("invalid username or password");
}
