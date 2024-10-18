//  var currentDate = new Date();
//  var month = currentDate.getMonth()  + 1;
//  var day = currentDate.getDay();
//  var date = currentDate.getDate();
//  var year = currentDate.getFullYear();

//  console.log(month);
//  console.log(day);
//  console.log(date);
//  console.log(year);
 
//  var hour = currentDate.getHours();
//  console.log(hour);
//  var minutes = currentDate.getMinutes();
//  console.log(minutes);
//  var seconds = currentDate.getSeconds();
//  console.log(seconds);
//  var miliseconds = currentDate.getMilliseconds();
//  console.log(miliseconds);
//  var milisecondsSince_1970 = currentDate.getTime();
//  console.log(milisecondsSince_1970);
 

// //////////////////////// Specifying a date and time

// var date1 = new Date("October 19, 2024");
// console.log(currentDate);
// console.log(date1);


// var today = new Date("October 18, 2024")  ;
// var futureDate = new Date("October 25, 2024")  ;

// var miliSecToday = today.getTime();
// var miliSecFutureDate = futureDate.getTime();

// // console.log(miliSecToday);
// // console.log(miliSecFutureDate);

// var difference = miliSecFutureDate - miliSecToday
// var dayDifference = difference / (1000 * 60 * 60 * 24)

// console.log(dayDifference);


// console.log( new Date("July 21, 1983 13:25:00"));

//////////////////////////////// Set Date

// var currentDate = new Date();
// currentDate.setFullYear(2030)
// console.log(currentDate);


// ////////////////////////////////////////  Date Format 
// var currentDate = new Date();
// var dateString = currentDate.toDateString()
// console.log(dateString);


// var timeString = currentDate.toTimeString()
// console.log(timeString);


// var localizedDate = currentDate.toLocaleDateString()
// console.log(localizedDate);



//////////////////////////////   functions


/// functions declaration


console.log("Function! se pehly");

function funcName (){
    console.log("Hello Function!");
}

console.log("Function! se baad");

/////////////// invoke / call karna

funcName();
funcName();
funcName();
funcName();
funcName();