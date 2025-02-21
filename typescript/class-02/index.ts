let a: boolean = true;

// type aliases

type Person = {
    name: string;
    email: string;
    contact: number;
    profImg? :string;
}


const person1:Person = {
    name: "Ruhama",
    email: "abc@gmail.com",
    contact: 44454545,
    profImg:"fftr"
}

// const person2:Person = {
//     name: "Gull",
//     email: "xyz@gmail.com",
//     contact: 44454545,
 
// }

// console.log(person2);


// let persons: string[] =["Ruhama", "Hajra"];
// persons.push("Tuba");
// // persons.push(433);


const persons: Person[]  =[
    person1,
    {
        name: "Gull",
        email: "xyz@gmail.com",
        contact: 44454545,
     
    }
]




// interfaces
// type MyStr = string
// let str: MyStr = "hello"

// interface User {
//     name: string;
//     email: string;
//     contact: number;
//     profImg? :string;
//     // size : string | number 
// }  


////////// Union |

// type X = string | number 

// let size: X = "XL";

// console.log(size);

// size = 42
// size = "hello"

//////////////////////////// String Literals / literal types


// type X = "sm" | "lg" | "xl" | "xxl" |  42 | 48 

// let size: X = "xl";

// console.log(size);

// size = 42
// size = 43 // error



/////////////////////// Function

// let myFunc: Function

type MyFunc =  (x:number, y:number)=> number // declrae

const sum:MyFunc = function(n1:number, n2:number ):number{
    return n1 + n2
}

let result = sum(45, 56);
console.log(result);

// let str:string;



let func: (x:number, y:number)=> number // declrae

func = function(x:number, y:number):number{
return x * y
}  // initialization






