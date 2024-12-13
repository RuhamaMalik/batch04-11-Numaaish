// let num = [1,2,3];

/////////////////////// map / forEach


// let square =num.forEach((e)=> e * e)
// ////   !change-original-array
// ////   !newArray

// console.log("original " ,num); // [1,2,3];
// console.log("updatd " ,square); // undefined


// num.forEach((e)=> console.log(e * e))



// let updated = num.map((e,i)=>  e * e )
// ////   !change-original-array
// ////   newArray
// console.log("original " ,num);
// console.log("updatd " ,updated); 


//////////////// filter / find

// let num = [1,2,3,4,1, 5,7,];

// let filtered = num.filter((e)=>  e > 3   );
// let even = num.filter((e)=>  e % 2 === 0   );
// console.log(num);
// console.log(even);

// let odd =num.find((e)=> e%2 !== 0);
// console.log(odd); // 1


///////////////// reduce

// let num = [1,2,3,4,5];

// let result = num.reduce((acc , e)=> acc + e   , 3) // 18
// let result = num.reduce((acc , e)=> acc + e) //  15
// console.log(result);


// let str = ["Ruhama", "Gull"];
// let result = str.reduce((acc, e)=> acc + e);
// console.log(result);


//////////////// some / every   ------------- true /false

let num = [1,2,3,4,5];

// let some = num.some((n) => n > 2);
// console.log(some); // true
// let some = num.some((n) => n > 4);
// console.log(some); // true


// let every = num.every((n) => n > 4);
// console.log(every); // false


/////////////////// includes ------------ true /false ------ case sensitive

// let usernames = ["Salar Sikandar", "Ruhama Gull", "Maam Tuba ", "Yusma Shah" ,"Maam Irma Narmeen"];


// let include = usernames.includes("Ruhama Gull") // true
// let include = usernames.includes("RuhAma Gull") // true
// let include = usernames.includes("Gull") // false
// let include = usernames.includes("Maam") // false

// console.log(include);


/////////////// reverse   ------------- change original array

// usernames.reverse()
// console.log(usernames); //  ['Maam Irma Narmeen', 'Yusma Shah', 'Maam Tuba ', 'Ruhama Gull', 'Salar Sikandar']



///////////////// join

let usernames = ["Salar Sikandar", "Ruhama Gull", "Maam Tuba ", "Yusma Shah" ,"Maam Irma Narmeen"];

let result = usernames.join("-")

console.log(result);

// "Ruhama Gull"
// "lluG amahuR"