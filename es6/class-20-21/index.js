const car = new Map([
    ["model", "CC2018"],
    ["name", "BMW"],
    ["series", "x13"],
    ["price" , 860000000],
    ["color", "black"]
]);



// console.log(car);
// console.log(car.get("price" ));
car.set("series" , "x17");
car.set("speed" , true);

// console.log(car);
// console.log(car.has("color"));
// console.log(car.has("colors"));

car.delete("price");
console.log(car.size); //5

let arrayKey = [1,2,3,4];

car.set(arrayKey, "Array key value")

console.log(car);

console.log(car.get(arrayKey));


// car.clear();
// console.log(car.size); // 0



// {} ------------ !iterable ------- for in
// [], "", Map, Set ---------- iterable ----- [Symbol.iterator] --- for of


// for(let  [key, value] of car   ){
// console.log(key , " ",  value);

// }


// car.forEach((value, key)=>{
//     console.log(key , " ",  value);
// })