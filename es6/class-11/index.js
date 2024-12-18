////////////////// Enhanced Object Literals

////////////////////Property Shorthand

// const name = "Ali";
// const age = 10;

// const person = {
//     // name: name,
//     // age:age
//     name,
//     age
// }

// console.log(person);

////////////////////Method Shorthand


// let person ={
//     // greet : function(){
//     //   console.log("Hello");
//     // }

//     greet(){
//         console.log("Hello Guest");
//     },
//     name:"Haider"
// }


// person.greet();
// console.log(person);


//////////// Computed property name

// const key = "name"

// let person = {
//    [key] : "Ruhama"
// }

// console.log(person.name);



////////////////////////// prototype


// let person = {
//     name:"ruhama"
// }

// Object.prototype.age = 90
// console.log(person);

const proto = {
    greet(){
        console.log("hello");
        
    }
}


const person = {
    __proto__ : proto,
    name:"Shah",
}


console.log(person);


const person2 = {
    name:"Haider",
}

console.log(person2);
