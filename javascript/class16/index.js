//  Number Methods

//////  round nmbers ---- string convert to number -----

// console.log(Math.round(4.5)); // 5
// console.log(Math.round(4.4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log( Math.round("4.6")); //  5 round ---- convert to number
// console.log(typeof Math.round("4.6")); //  number
// console.log( Math.round(-5.5));  // -5
// console.log( Math.round(-5.2));  // -5
// console.log( Math.round(-5.8));  // -6

//////////////////// Math.ceil

// console.log(Math.ceil(4.5));  // 5
// console.log(Math.ceil(4.9));  // 5
// console.log(Math.ceil(4.2));  // 5
// console.log(Math.ceil(-4.2)); // -4
// console.log(Math.ceil(4.0)); // 4
// console.log(Math.ceil(4.1)); // 5
// console.log(Math.ceil("4.2")); // 5

///////////////  Math.floor

// console.log(Math.floor(4.5));  //    4
// console.log(Math.floor(4.9));  //  4
// console.log(Math.floor(4.2));  // 4
// console.log(Math.floor(-4.2)); //  -5
// console.log(Math.floor(4.0));  // 4
// console.log(Math.floor(4.1));   // 4
// console.log(Math.floor("4.2")); // 4

//////////////// Math.random() ----- 0 - 1 (1 excluded) --- 0 - 0.9 ------ 16 decimal points

// console.log(Math.random()); //
// console.log(Math.random()); //
// console.log(Math.random()); //
// console.log(Math.random()); //
// console.log(Math.random()); //

// var randomNum = Math.random() * 10 ;
// console.log(Math.floor(randomNum) + 1);

// /////////////// Number Guessing Game

//  correct
//  correct 5 >>>> 6 - 4 >>>> tooo close
// you lose

var randomNum = Math.random() * 10;
var correctNum = Math.floor(randomNum) + 1;
var userNum = +prompt("Guess the Number between 1 to 10");

if (userNum === correctNum) {
    console.log("Correct!");
} else if (userNum === correctNum + 1 || userNum === correctNum - 1) {
  console.log("Almost there! . The Correct Number is : " + correctNum);
} else {
    console.log("You Lose. The Correct Number is : " + correctNum);
}


