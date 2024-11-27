// var a =  5;

// function myFunv (){
//     var a =  5;

// a = 3
// }

// console.log(a);

// function a (){

// }

// function b (a , num){
//  return a(num)
// }

// b(a , 2)

// var global = "global variable";

// // console.log(global);

// {
// }
// function checkScope() {
//   // console.log(global); // accesss
//   var local = "local variable";
//   //console.log(local); // accesss

//   if (true) {
//     //console.log(local);// accesss
//     var block = "block scope variable";
//   }

// //   console.log(block);// accesss
// }

// // console.log(local);
// // console.log(block);
// checkScope();

// var a = 5;

// function check (){
//    a = 4
// }

// console.log(a); // 5

// check()
// console.log(a);  //4

// function create (){
//     directIniialze = 5;
// }

// create ()
// console.log(directIniialze);

// var myVar;
// myVar = "can be initialize later";
// console.log(myVar);

// var myVar = "can be redeclare"
// console.log(myVar);

////////////////////// let

// let canChange;
// canChange = "can be initialize later"; // initialize
// console.log(canChange);
// canChange = "can be reassign later";
// console.log(canChange);

// let canChange;  // error can not redeclare block scope variable

////////////////  const

// const justInitialize ; // error 'const' declarations must be initialized
// const myVar = "with initialization" ;
// myVar = "try to redeclare";

// console.log(myVar);
// const myVar ; // error

//////////////// block scope

// let globalVar = "global variable";
// // console.log(globalVar);

// function checkScope (){
//    // console.log(globalVar);
//    if (true){
//       // console.log(globalVar);

//    }
// }

// checkScope ()

// //////////// function scope

// function checkScope (){
//    let functionScop = "functionScop variable";
//    if (true){
//       // console.log(globalVar); // access

//    }

//    // console.log(functionScop); // access

// }
// checkScope ()
// // console.log(functionScop); // error

//////////// block scope  ---------- {}

// function checkScope (){
//    if (true){
//       let blockScop = "block variable";
//       // console.log(blockScop);

//    }
//    console.log(blockScop); // error
// }
// checkScope ()

//////////////////////// Hoisting
// var a ;

// console.log(a); // undefined
// var a= 5;

// b = 10;
// console.log(b);  // 10
// var b;

// c = 5;
// console.log(c);
// let c;

// check();

// function check(){
// console.log("hello");

// }

// a();
// var a = function (){
//    console.log("hello class");

//    }

// a();

// a();
// let a = function () {
//   console.log("hello class");
// };


//////////////// string literals '' ""    -----------ES5
//////////////// Template literals ``    -----------ES6 (line break , use ${} to inject expression / variable , )

