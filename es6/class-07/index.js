/////////////////// ternary operator / conditional operator

//  if(true){
//     console.log("truthy value");

// }else{
//     console.log("falsy value");
// }

// let myCondition = false && "truthy" ?  console.log("truthy value") : console.log("falsy value");

// let id = 5;
// let btnTex = id ? "Update" : "Add"

// console.log(btnTex);

/////ex

// let username = prompt("Enter your name!");

// username ? console.log(`Hello ${username}`) : console.log(`Hello Guest`);

// let num = 5;
// num = num >=5 ? num-2 : num + 2

// console.log(num); // 7

// let num = 5; /////////////// error !multipleStatement
//  num >=5 ?{ num= num-2; console.log(num)} : num=num + 2
// console.log(num); // 7

// let num = +prompt("Enter Number");
// num % 2 === 0
//   ? console.log(`${num} is even number`)
//   : console.log(`${num} is odd number`);

// let num = +prompt("Enter Number");
// let result = num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative"
// console.log(result);

/////////////////// Callback

// function abc (callback){
//     callback()
// }
// abc (myFunc)

// const greet = (username) => {
// console.log(`Hello ${username} , myself callback function`);
// }

// const userData = (callback)=>{
// console.log(`Fetching user data`);
// const user = {
//     name:"Dua",
//     email : "abc@gmail.com"
// }
// callback(user.name)

// }

// userData(greet)

///////////////////
// const square  = n => n * n
// const double  = n => n * 2

// const  computeNum = (n, callback)=>{
// let result = callback(n)
// console.log(result);

// }

// computeNum(5 , square)
// computeNum(5 , double)

////////////////////////

const us = (grade) => {
  switch (grade) {
    case "A+":
      console.log(`You got an ${grade} : Excellent`);
      break;
    case "A":
      console.log(`You got an ${grade} : Good Job!`);
      break;
    case "B":
      console.log(`You got  ${grade} :ok!`);
      break;

    case "C":
      console.log(`You got  ${grade} :need to improvement`);
      break;
    default:
      console.log(`You got  ${grade} : OOps try again`);
  }
};


const pk = (grade) => {
    switch (grade) {
      case "A+":
        console.log(`You got an ${grade} : Zabardast`);
        break;
      case "A":
        console.log(`You got an ${grade} : Bht Behtreen!`);
        break;
      case "B":
        console.log(`You got  ${grade} :acha kia!`);
        break;
  
      case "C":
        console.log(`You got  ${grade} : mehnat ki zaroorat hai`);
        break;
      default:
        console.log(`You got  ${grade} : Oh! doobara koshish karen`);
    }
  };
  



const getGrade = (percentage, callback) => {
  let grade;
  switch (true) {
    case percentage >= 90:
      grade = "A+";
      break;
    case percentage >= 80:
      grade = "A";
      break;
    case percentage >= 70:
      grade = "B";
      break;
    case percentage >= 60:
      grade = "C";
      break;
    case percentage >= 50:
      grade = "D";
      break;
    default:
      break;
  }

  callback(grade);
};


getGrade(90 , us)