// var num = 8;  // 13

// var exp = num++ + num++ - num++ + ++num + ++num;
//     //      8   +  9    -  10   +    12 +  13
//     //  32

// console.log(num); // 13
// console.log(exp); // 32

// pre / post Decreament (--)

// var x = 7; //  8
// var exp = x++ - --x + ++x + ++x + --x + x++ + x--;
//        // 7   -   7 +   8 +   9 +   8 +  8   + 9

// console.log(x); // 8
// console.log(exp); //  42

// var  num = 6;  // 6
// var myExp = num++ + num-- - --num - --num + ++num - ++num;
//        //    6    +  7    -    5  -     4 +    5  -    6

// console.log(num); // 6
// console.log(myExp); //   3

// Math expressions:Eliminating ambiguity

// B ---- BRACKETS
// O ---- ORDER
// DM ----
// AS

// var myEq = 3 + 4 -3;  // 4
// var myEq2 = 3 + 4  * 3 // 15
// var myEq3 = (3 + 4)  * 3 // 21
// var myEq4 = (7 * 6) - (3 + 4) * 3- 7 -3;

// console.log(myEq4);  // 11

//  ASSIGNMENT OPERATOR   =

// var a = 5;
// // a = a + 10;

// // a += 10; //15
//  a -= 3;

// console.log(a); // 2



//  Concatenating text strings  +

// var fName = "Hajra";
// var lName = "Asif";

// console.log(fName + "    " +   lName);
// console.log("Hello" + " World");
// console.log(" my age is :" + 10);
// console.log("10" + 5); // 105  string
// console.log("10" + 5 + 10); // 10510 string
// console.log(3 + 7 - "3" + "10"); // 710   string
// console.log(3 - "1a"); // NaN
// console.log(3 - "1 a"); // NaN 



//   Prompts

// prompt(Question ,  dEFAULT aNS(OPTIONAL));

// var userInput  = prompt("What is JS ?");
// console.log(userInput);


// var question = "What is JS ?";
// var dAns = "Programmin Language";
// var userInput  = prompt(question , dAns);
// console.log(userInput);

// var city = prompt("Where do you live ? ");
// console.log( city);


// var userNum = prompt("What is your lucky number? ");
// console.log(userNum + 5); // 55 string

// var userNum = +prompt("What is your lucky number? ");
// console.log(userNum + 5); // 5 +5 =  10 number
// console.log(userNum + 5); // "hello" +5 = NaN
 


