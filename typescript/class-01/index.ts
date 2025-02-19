// any
// unknown
// unique
// Union / Intersection



// type 
// interface
// ENUMS
// Tuples
// classes



///// type inference
// let a = 45;
// a = 50;
// a = "50" // error

///// type annotation (explicitly)

// let num: number = 67;
// console.log(num);
// let myStr: string = "mY sTRING";
// console.log(myStr);


///////////

// let b;

// b = 57;
// b = "hello"



/////////////////////////////


// const num1 = document.getElementById("num")! as HTMLInputElement
// const num2 = document.getElementById("num2")! as HTMLInputElement

// const Addtion = (n1:number , n2:number):number=>{
// return n1 + n2
// }


// /////// non-null assertion operator (!)
// document.getElementById("submit")?.addEventListener("click",()=>{
//     let result = Addtion(+num1.value , +num2.value)
//     console.log(result);
    
// } )




// const num1 = document.getElementById("num")! as HTMLInputElement
// const num2 = document.getElementById("num2")! as HTMLInputElement

// const Addtion = ()=>{
//    console.log( +num1.value + +num2.value);
// }


// /////// non-null assertion operator
// document.getElementById("submit")?.addEventListener("click",Addtion)


const num1 = document.getElementById("num")! as HTMLInputElement
const num2 = document.getElementById("num2")! as HTMLInputElement

const Addtion = (n1:number , n2:number)=>{
   console.log( +n1 + +n2);
}


/////// non-null assertion operator
document.getElementById("submit")?.addEventListener("click",()=> Addtion(+num1.value , +num2.value))