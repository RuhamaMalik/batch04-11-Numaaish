/////////// Symbol

// let x = "my str";
// let y = "my str";

// console.log(x === y); // true

// let x = Symbol("my str");
// let y = Symbol("my str");

// console.log(x === y); // false


// let mySymbol = Symbol(123);
// console.log(typeof mySymbol); // symbol

// alert(mySymbol.toString());
// console.log(mySymbol.description);
// console.log(typeof mySymbol.description);
// alert(mySymbol.description);

// console.log(typeof Number(mySymbol.description));

// mySymbol = Symbol("abcd")
// console.log(mySymbol.description);

// let cnic = Symbol("cnic");

// let person = {
//     [cnic] : "1234-4545-454",
//     // [cnic.description] : "1234-4545-454",
//     name: "Hajra",
//     age:10
// }
// let person2 = {
//     cnic : "1234-4545-454",
//     // [cnic.description] : "1234-4545-454",
//     name: "Hajra",
//     age:10
// }

// console.log(person.cnic); // undefined
// console.log(person[cnic]);

// console.log(person.cnic === person2.cnic); // 





// let cnic = Symbol("cnic");

// let person = {
//     [cnic] : "1234-4545-454",
//     // [cnic.description] : "1234-4545-454",
//     name: "Hajra",
//     age:10
// }


// for(const key in person){
// console.log(person[key]);
// }



// console.log(JSON.stringify(person));

// console.log(JSON.parse(JSON.stringify(person)));


/////////////////////////////// Iterator

// let arr = ["html", "css", "javaScript"];

// let x = arr[Symbol.iterator]();

// console.log(x.next()); // 
// x.next();
// console.log(x.next()); // 
// console.log(x.next()); // 
// console.log(x.next()); // 
// console.log(x.next()); // 

// console.log(x.next().value); // html
// console.log(x.next().done); // false



let arr = ["html", "css", "javaScript"];
// let arr = "Ruhama";
// let x = arr[Symbol.iterator]();

// let nextEle = x.next();


// while(!nextEle.done){
//     console.log(nextEle.value);
//     nextEle = x.next()
// }

for (let ele of arr){
console.log(ele);

}