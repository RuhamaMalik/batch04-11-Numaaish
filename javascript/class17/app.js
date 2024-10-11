// Array + loop
// conditions (Comparision operator)
// nested loop

// var names = ["Ali", "Ahmed", "Sana"];
// var skills = ["full stack Developer", "Block chain Expert", "Data Scientist"];

// for (var i = 0; i <= names.length - 1; i++) {
//   document.write("<h1>" + names[i] + "</h1>");

//   for (var j = 0; j < skills.length; j++) {
//     document.write("<h4>" + skills[j] + "</h4>")
//   }

// }

// document.write(" Outer code")

/////////////////////////// Three Time  Nested Loop

// var names = ["Ali", "Ahmed", "Sana"];
// var lNames = ["Jawwad", "Khan", "Fatima"];
// var skills = ["full stack Developer", "Block chain Expert", "Data Scientist"];

// for (var i = 0; i <= names.length - 1; i++) {
//   for (var j = i; j < lNames.length; j++) {

//     if(i === j){
//         document.write("<h1>" + names[i]+ " " + lNames[j] + "</h1>");
//     }

//     for(var k = 0; k < skills.length; k++){
//         if(i === j){
//         document.write("<h4>" + skills[k] + "</h4>")
//         }
//     }

//   }
// }

///////////////////////  Same work

// var names = ["Ali", "Ahmed", "Sana"];
// var lNames = ["Jawwad", "Khan", "Fatima"];
// var skills = ["full stack Developer", "Block chain Expert", "Data Scientist"];

// for (var i = 0; i <= names.length - 1; i++) {

//   document.write("<h1>" + names[i] + " " + lNames[i] + "</h1>");

//   for (var j = 0; j < skills.length; j++) {
//     document.write("<h4>" + skills[j] + "</h4>");
//   }

// }

// var nestedArr = [
//   "Ruhama",
//   "Yusma Shah",
//   true,
//   "Haider Ali",
//   98,
//   ["Shah Fahad", "Irma Narmeen"],
//   "Abiha Fatima",
//   ["Shah Fahad", "Irma Narmeen"]
// ];

//////// Correct

// for (var i = 0; i < nestedArr.length; i++) {
//   if (typeof nestedArr[i] === "string") {
//     document.write(nestedArr[i] + "</br>");
//   }
//   else if (nestedArr[i].length > 0 ){
//        for(var j= 0 ; j< nestedArr[i].length; j++){
//         document.write("The Greate " + nestedArr[i][j] + "</br>");
//        }
//   }else{
//     document.write("The value neither string nor an Array : " + nestedArr[i] + "</br>")
//   }
// }

// console.log(typeof {});

//  Wrong Condition

// for (var i = 0; i < nestedArr.length; i++) {
//   document.write(nestedArr[i] + "</br>");
//   if (nestedArr[i].length > 0) {
//     for(var j=0 ; j<nestedArr[i][j].length; j++ ){
//         document.write(" The Greate " + nestedArr[i][j] + "</br>");
//     }
//   }
// }

// var userInput = +prompt("Enter Number");

// if (userInput > 0) {
//   alert("You Enter the Positive Nmber");
// }else if(userInput  < 0 ){
//     alert("You Enter the Negative Nmber");

// }else{
//     alert("Enter Number is 0")
// }


//////////////////// 


var userEdu = prompt("Enter Your Qualification").toLowerCase();
var userAge = +prompt("Enter Your Age");

if (userEdu === "undergraduate" || (userEdu === "graduated" && userAge >= 18)) {
  alert("You are Eligible for Advance Web courses ... ");
} else if (userEdu === "intermdite" && userAge >= 18) {
  alert("You are Eligible for Web & App courses ... ");
} else {
  alert("You are Eligible for Techno Kids  courses ... ");
}
