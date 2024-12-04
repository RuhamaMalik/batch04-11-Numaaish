// function abc (a, b=4){
// console.log(b);

// }


// // abc(5); //4
// abc(5, 8)

//////////////// Rest Parameters

// function sum (...args){  // rest
// // console.log(args); //[1,2,3,4,5,6,7,8]
// // console.log(...args); // spread  1,2,3,4,5,6,7,8

// const [a,b,c,d] = args
// console.log(c);


// }

// sum(1,2,3,4,5,6,7,8)

///////////////////////

// function getUserName ({name}){
// console.log(name);

// }

// const user = {name:"Ruhama", age:10}
// // getUserName ({name:"Ruhama", age:10})
// // const {name} = user;
// getUserName(user)


///////////////////////  

// let arr = [1,2,3,[4],5];

// let arr2 = arr.slice();
// let arr2 = [...arr] // shallow copy
// console.log("arr >>>>>>>>> " , arr);
// console.log("arr2 >>>>>>>>> " , arr2);


// let arr2 = [...arr , 6,7,8,9];

// arr[2] =33
// console.log(arr); // 33
// console.log(arr2); // 3


// arr[3][0] = 44
// console.log(arr); // 44
// console.log(arr2); // 44


////////////////////



// let obj1 = {
//     name: "Ruhama",
//     age:10,
//     skills:{
//        javaScript : "Proficient" ,
//        NextJs: "Intermediate",
//        React:"Proficient"
//     }
// }

// let obj2 = {...obj1}
// obj1.age = 20  /// change only obj1
// obj1.skills.NextJs = "Expert"  /// change all


// let obj2 = {...obj1 , skills:{...obj1.skills} } // deep copy
// obj1.skills.NextJs = "Expert";
// console.log(obj1);
// console.log(obj2);



/////////////////// Mutation


// let obj1 = {
//     name: "Ruhama",
//     age:10,
//     skills:{
//        javaScript : "Proficient" ,
//        NextJs: "Intermediate",
//        React:"Proficient"
//     }
// }


// Object.freeze(obj1);   //////////// Immutable Object (not changable)
// obj1.name = "Alishah";


// console.log(obj1);


////////Home Work

// 1) Lexical Scope
// 1) Arrow Function
// 3) Closures