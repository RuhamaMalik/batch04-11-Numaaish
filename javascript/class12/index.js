// var cleanCities = ["Karachi", "Peshawar", "Islamabaad", "Lahore", "Quetta"];
// var userCity = prompt("Enter Your City Name");
// var isCityFound = false; // Flag

// Flag
// for (var i = 0; i <= cleanCities.length - 1; i++) {
//   if (cleanCities[i] === userCity) {
//     isCityFound = true;
//     alert("Congratulations! you live in clean city.");
//     break;
//   }

// //   else{
// //     alert("Clean City not found!");

// //   }
// }

// if(!isCityFound){
//     alert("Clean City not found!");
// }

//  Quiz

// var questions = ["what is js ?", "css stand for?", "HTML stands for ?"];
// var answers = [
//   "Programming Language",
//   "Cascading Style Sheet",
//   "Hyper Text Markup Language",
// ];
// var score =0;

// // var userAns = prompt(questions);

// var i;
// for (i = 0; i <= questions.length - 1; i++) {
//   var userAns = prompt(questions[i]);

//   for (var j = 0; j <= answers.length - 1; j++) {
//     if (i === j && userAns === answers[j]) {
//         // alert("Correct")
//         score++;
//     }
//   }
// }

// alert("Your Total Score: " + score)

// var nestedArr = [["a","b","c"], [1,2,3,4], ["x","y","z"] ];

// // console.log(nestedArr[1][2]);

// for(var i =0; i< nestedArr.length; i++){
//     console.log(nestedArr[i] , i);

//     for(var j=0; j < nestedArr[i].length; j++  ){
//         console.log(nestedArr[i][j] , j );

//     }

// }

//  Print FullName

var fName = ["Ruhama", "Hajra", "Yusma", "Mehreen"];
var lName = ["Gull", "Asif", "Shah", "Naqvi"];
var fullName = [];

for (var i = 0; i < fName.length; i++) {
  for (var j = 0; j < lName.length; j++) {
    if (i === j) {
        // console.log( fName[i] + " " + lName[j]);
        fullName.push(fName[i] + " " + lName[j])
    }
  }
}


console.log(fName);
console.log(lName);
console.log(fullName);
