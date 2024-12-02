// const myArr = [1,2,3,4,5];

// // myArr.push(6,7);
// myArr = [1,2,3,4,5,6,7]
// console.log(myArr);

/////////////// Default Value 

// let myArr = [1,2,3, 44];
// const [ele1 , ele2 , ele3, ele4 = 4] = myArr;
// console.log(ele4);

// const myObj = {
//     name : "Rumaisa",
//     id : 435,
//     age: 10,
//     // size: 24
// }

// const {name, age ,id , size= 30} = myObj

// // console.log(age); // 10
// console.log(size); // 



////////////////// Rest Operator  (...)

// let fruits = ["Apple", "mango", "water melon", "kiwi", "Banana", "Orange"];
// let [frit1, frit2 , ...remaining] = fruits;

// console.log(frit1);
// console.log(frit2);
// console.log(remaining);

// let student = {
//     name : "Abida",
//     grade : "1",
//     section :"A",
//     rollNo : 12345,
//     city : "Karachi",
//     zip: 10000
// }


// const {name , grade , ...rest} = student

// const {name , section , ...rest} = student

// console.log(name);
// // console.log(grade);
// console.log(section);
// console.log(rest);


///////////////// Space

// const myArr = [1,2,3,4,5,6];
// const [e1, e2 , , e4 , ,e6 ] = myArr;
// console.log(e4); //  4
// console.log(e6); //   6


// const [e1, e2 , , , e5 ,e6 ] = myArr;
// console.log(e2); //  2
// console.log(e5); //   5
// console.log(e3); // error  

/////   
// const myArr = [1,2,3,4,5,6, 7]
// const [e1, e2 , , , e5 ,e6 , ...remaining ] = myArr;
// console.log(e2); //  2
// console.log(e5); //   5
// console.log(remaining); // 7


// let student = {
//     name : "Abida",
//     grade : "1",
//     section :"A",
//     rollNo : 12345,
//     city : "Karachi",
//     zip: 10000
// }

// const {name , section} = student;

// console.log(name);
// console.log(section);


//////////////// Nested Destructuring

// let nestedArr = [1 ,2,[3,4 ,[ "a"] , 5],5,6];
// const [e1, e2 ,[ e3 , e4 , [a] , en5] ,e5 , e6] = nestedArr;

// console.log(a);


let nestedObj = {
    player: 1,
    games :3,
    locations:{
        l1 : "karachi",
        l2: "Peshawar",
        l3:"Islamabad"
    }
}

// const{player, locations} = nestedObj;
// console.log(locations);

// const{player, locations, locations:{l1,l2,l3}} = nestedObj;
// console.log(locations);
// console.log(l1);
// console.log(l2);
// console.log(l3);


