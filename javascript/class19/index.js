////////// ParseFloat

// console.log(parseFloat("89.98656959")); // 89.98656959
// console.log(parseFloat("string 89.98656959")); // Nan
// console.log(parseFloat("45 89.98656959")); // 

/////////////////// Number()


// var str = "3.56";
// str = Number(str);
// console.log(typeof str);
// console.log(str);

// console.log(Number());  // 0

/////////////////// toString()
// number
// var num = 45;
// console.log(num + 3); // 48
// num = num.toString();
// console.log(num + 3); //  453 


//boolean
// var isLoggedIn = true;
// isLoggedIn = isLoggedIn.toString();
// console.log(isLoggedIn.slice(2, 3)); // u


//undefined 
// var convertToStr = undefined;
// console.log(convertToStr);
// convertToStr = convertToStr.toString();
// convertToStr = convertToStr + ""
// console.log(typeof convertToStr);

//////////////////// toFixed()  

// var decimalVal = 25.9597449;
// console.log(typeof decimalVal);
//  decimalVal = decimalVal.toFixed(2)
// console.log(typeof decimalVal);

// var decimalVal = 25;
// decimalVal = decimalVal.toFixed(2)
// console.log( decimalVal);
// console.log(typeof decimalVal);

/////////////////////// Getting the current date and time

// var currentDate = new Date();
// console.log(currentDate);
// console.log(currentDate.slice(4, 10)); // error
// console.log(typeof currentDate);  // object

// currentDate = currentDate.toString();
// console.log(typeof currentDate); // string
// console.log(currentDate.slice(4, 10));
// console.log(currentDate.slice(16, 24));

// var currentDate = new Date();
// var currentDay = currentDate.getDay()

// console.log(currentDay);

//////////////// Extract Day Name

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDate = new Date();
var dayIndex = currentDate.getDay(); //3
var day = dayNames[dayIndex];

console.log(day);
