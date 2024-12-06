/////////// Traditional Function Expression

// let add = function (a,b){
// return a + b
// }

// const sum = (a,b) =>{
//  return a+b
// }

// one line Arrow Function
// const subtract = (x,y) => x -y

// no parameters

// const sayHello = () => console.log("Hello");

///// One Arg/Param

// const oneArg = x => console.log(x);
// oneArg("Hello")

// function argBinding (){
//     console.log(arguments);
// }

// argBinding (4)

// function argBinding (...arg){
//     console.log(arg);
// }

// argBinding (4)

// const argBinding =(...arg) =>{
//     console.log(arg);

// }

// argBinding (4)

// let person = {
//     name :"Ruhama",
//     age: 10,
//     greet: function(){
//         console.log("hELLO " + this.name);

//     }
// }

// person.greet()

// let person = {
//     name :"Ruhama",
//     age: 10,
//     greet: ()=>{
//         console.log("hELLO " + this.name);

//     }
// }

// person.greet()


///////////////////

// function ConstructorFunction(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let user1 = new ConstructorFunction("Ruhama" ,10);
// console.log(user1);


// const  ConstructorFunction = (name, age) => {
//     this.name = name;
//     this.age = age;
//   }
  
//   let user1 = new ConstructorFunction("Ruhama" ,10);
//   console.log(user1);


//////////////////////// Closures

// let count = 0;

// function increament(){
//     count++ ;
//     console.log(`Count : ${count}`);
    
// }

// // increament() // Count: 1
// // increament()  // Count: 2

// let count1 = increament;
// let count2 = increament;

// count1(); // 1
// count1(); // 2

// count2() ; // 3
// count2() ; // 4


////////////// Example Closures

// function createCounter (){
//     let count = 0;

//     function increament(){
//         count++ ;
//         console.log(`Count : ${count}`);
//     }

//     return increament;
// }

// let count1 = createCounter();
// let count2 = createCounter();


// count1(); // 1
// count1(); // 2

// count2() ; // 1
// count2() ; // 2


///// ternary operator
///// callback
///// HOF