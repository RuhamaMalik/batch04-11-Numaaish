// const proto = {
    // greet(){
    //     console.log("hello");
        
    // }
// }

// // legacy feature
// const person = {
//     __proto__ : proto,
//     name:"Shah",
// }


// // console.log(person.greet());


// const person2 = {
//     name:"Haider",
// }

// console.log(person2);



///////////////////////////////////// Modern Way 

//////// Object.create()

// const proto  = {
//     greet(){
//         console.log("hello");
//     }
// }

// const  student = Object.create(proto)

// student.name = "Hajra";
// console.log(student);


//////// setPrototypeOf


// const proto  = {
//     greet(){
//         console.log("hello");
//     }
// }


// const price = "productPrice";

// const product = {
//     name:"Shampoo",
//     quantity:6,
//     [price] : "$89"
// }


// Object.setPrototypeOf(product, proto)


// console.log(product);



////////////////////////// Optional Chaining (?.)

////////// obj && obj.property && obj.property.nestedProperty
////////// obj?.property?.nestedProperty


// const user ={
//     name:"Ruhama",
//     age:10,
//     skills:{
//         professional:["React", "Node js", "Next js"],
//         additional:["Cooking" , "Dish wash" , "Laundary"],
//     },

// greet(){
//    return `Hello ${this.name}`;
    
// }
// }

// console.log(user.skills.professionals[2]); // type error
// console.log(user?.skills?.professionals?.[2]);


// user.greet()

// console.log(typeof user?.sayBye?.());
// console.log(typeof user?.sayBye);


/////////////// Home
// > synchronous
// > asynchronous