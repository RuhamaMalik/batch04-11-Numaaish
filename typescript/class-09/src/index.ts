/////////////// intersection

// type A ={
//     type:"A"; 
// name:string;
// age:number
// }
// type B ={
//     type:"B";
//     email:string;
//     contact:number
// }

// type D = A | B


// let person2:D ={
//     type:"A", // allow only one type
//     name: "string",
//     age: 123,

// }

///////////// intersection
// type D = A & B


// let person2:D ={
//     name: "string",
//     contact: 1212,
//     age: 123,
//     email: "string",

// }



//////////////// Interface

// interface A {
//     name: string;
//     age?: number;
//     greet(): void
// }
// interface B {
//     email: string;
//     contact: number;
// }
// interface E { id: number }


// interface C extends A, B { }
// interface D extends C , E { }


// let person: C = {
//     name: "Ruhama",
//     // age:10,
//     email: "string",
//     contact: 34734736473,
//     greet() {
//         console.log("hello " + this.name);

//     }
// }

// console.log(person);


///////////////// interface with class

// class Person implements C {
//     constructor(public name: string, public email: string, public contact: number) { }

//     greet(): void {
//         console.log("Hello " + this.name);

//     }

// }

// let person1: C = new Person("Ruhama" ,"abc@gmail.com",56565 )

// console.log(person1.greet());

///////////////////////////////////  

// same name ki type nahi ban sakti

// interface User {
//     id:number,
// }

// interface User {
//     name:string,
// }


// let user1:User ={  /// Merge
//     id:1,
//     name:"ruhama"
// }




/////////////////////      Type Casting  <>  ,,,,, as

let myStr:unknown = "Hello";
console.log((<string>myStr).length);


myStr = 789.45

console.log(Math.round(myStr as number));


////////////////   Generics


function merge  <T, U>(objA: T, objB: U){
    return {...objA, ...objB}
}



const merged = merge({name:"Ruhama"}, {id:1})

// console.log(merged);
console.log(merged);
