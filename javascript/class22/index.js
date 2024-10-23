// function sum (a, b){
//     console.log("hello");
//     return a + b
//    }

//   var result =  sum(3 , 4);
//   console.log(result);

//  result =  sum(13 , 2);
//   console.log(result);

// function sum (a, b){
//     return(
//         a + b
//     )
//    }

//   var result =  sum(3 , 4);
//   console.log(result);

/////////////// Variable Shadowing

// var a = 5; // global

// function shadow (){
//     var a = 3;
//     a=10;
//     console.log(a); // 3

// }

// shadow();
// console.log(a); // 5

// var x = 3;

// function funcScopeVar (){
//     console.log(x);

// }

// funcScopeVar ()

// //////////////////// Switch Statement

// var day = prompt("Enter Day").slice(0,3).toLowerCase()   ;

// switch (day) {
//   case "mon":
//   case "tue":
//   case "wed":
//   case "thu":
//   case "fri":
//     console.log("Working Day");
//     break;
//   case "sun":
//   case "sat":
//     console.log("Weekend");
//     break;

//   default:
//     console.log("Default Statement");
// }

////////////// simulated vending machine

// function selectProduct(button) {
//   switch (button) {
//     case "A":
//       return "Despending Chips";
//     case "B":
//       return "Despending Juice";
//     case "C":
//       return "Despending Biscuits";
//     case "D":
//       return "Despending Cocomo";
//     default:
//       return "Item not Available!";
//   }
// }

// var trigger = prompt("What you want?").toUpperCase()
//  var product = selectProduct(trigger);
// console.log(product);
