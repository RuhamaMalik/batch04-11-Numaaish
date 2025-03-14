////////////////   Generics


// function merge  <T extends object, U extends object>(objA: T, objB: U){
//     return {...objA, ...objB}
// }



// const merged = merge({name:"Ruhama"}, {id:1})

// // console.log(merged);
// console.log(merged);




/////////////// Decorators

// function Logger (constructor:Function){
// console.log("Logger function call");
// }

// @Logger
// class Person{
//     name: string = "Ruhama"
//     constructor(){}
// }



// function Logger(message:string) {  // decorator factory
//     return function (constructor:Function) {  // actual decorator
//         console.log(message);
//     }
// }

// @Logger("Person Logger function call")
// class Person {
//     name: string = "Ruhama"
//     constructor() { }
// }


// @Logger("Animal Logger function call")
// class Animal {
//     name: string = "Cat"
//     constructor() { }
// }



/////////////////// 


function Logger(message: string) {  // decorator factory
    return function (constructor: Function) {  // actual decorator
        console.log(message);
    }
}

function FillHTML(template: string, eleId: string) {
    return function (constructor: any) {

        // console.log(constructor);

        const person = new constructor()
        console.log(person.name);

        const container = document.getElementById(eleId);
        container!.innerHTML = template;
        container!.querySelector("h1")!.innerText = "Hello " + person.name
    }
}

@Logger("Hello from Person")
@FillHTML("<h1>Hello Person</h1>", "container")
class Person {
    name: string = "Ruhama"
    constructor() { }
}

@FillHTML("<h1>Hello Person</h1>", "container2")
class Animal {
    name: string = "Cat"
    constructor() { }
}



/////////////////// without decorator
class Persone {
    name: string = "Ruhama"
    constructor() { }
}

function FillHTMLL(template: string, eleId: string) {
    const person = new Persone()
    console.log(person.name);

    const container = document.getElementById(eleId);
    container!.innerHTML = template;
    container!.querySelector("h1")!.innerText = "Hello " + person.name
}


FillHTMLL("<h1>Hello Person</h1>", "container")



//////////////////////// Function OverLoading


type Combined = string | number;

function add(x: string, y: string):string
function add(x: number, y: number):number
function add(x: Combined, y: Combined) {
    // return x + y ;

    if (typeof x === "string" && typeof y === "string") {
        return x + y;
    } else if (typeof x === "number" && typeof y === "number") {
        return x + y;
    } else {
        throw new Error("Type not match")
    }


}

const result = add("Hello ", "World");
console.log(result.split(" "));
const result2 = add(5, 5);
console.log(result2.toFixed());


// const result = add("Hello ", "World") as string;
// console.log(result.split(" "));
// const result2 = add(5, 5) as number;
// console.log(result2.toFixed());

// const result3 = add(5, "5");
// console.log(result3); // error
