const numbers = [1, 2, 3, 4, 5];

/////// 1-  accept callback as an argument
// numbers.map((e, i)=> console.log(`element ${e} : Index ${i}`))
// numbers.map((x, y)=> console.log(`element ${x} : Index ${y}`))
 const double = numbers.map((x, y)=> "Hello " + x )
// console.log(numbers);
// console.log(double);

////////// 2-  return function
// curring
// const calculate = (factor) =>{
//     const result = number =>  number * factor
// return result
// }

// const double = calculate(2) //number =>  number * factor
// const tripple = calculate(3)

// console.log(double(5));
// console.log(tripple(10));

// console.log(calculate(2)(5)); // curring

// const x = (a) => (b)=> (c) => a +b+c
// console.log(x(2)(3)(10));

const myArray = [3, 2,  3, 4, 5];

Array.prototype.customMap = function (callback) {
  let updated = [];
  for (let i = 0; i < this.length; i++) {
    // console.log(this[i]);
    // updated.push(this[i])
    updated.push(callback(this[i]))
  }
                           
return updated

  // return x
  // return this // [3,2,"Three",4,5]
};

// console.log(myArray);
// console.log(myArray.customMap((x)=> x+2));

// Array Methods

let num = [1,2,3];
// let updated = num.forEach((num, i)=>{return ` ${num * num}  Index ${i}`})

num.forEach((num, i)=> ` ${num * num}  Index ${i}`)
console.log(num);
