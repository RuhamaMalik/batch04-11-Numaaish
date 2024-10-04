// String


// var str = "heLlo World !"
// // str = str.toLowerCase() // change original var
// var newStr = str.toLowerCase() //
// console.log(newStr);
// console.log(str.toUpperCase());
// console.log(str);



// var cities = ["karachi", "peshawar"]

// userCity = prompt("dfkdjfd").toLowerCase();


// if(cities[i].toLowerCase()   === userCity  )



// var myStr = "I am learning Js.";
// console.log(myStr.length); // 17

// var myStr = "I    am learning   Js.";
// console.log(myStr.length); // 22


// var myStr = "I am learning Js.";

// console.log(myStr[0]); // I
// console.log(myStr.length-1); // 16
// console.log(myStr[myStr.length-1]); // .
// console.log(myStr[myStr.length-2]); // .



// var myStr = "I am learning Js.";

// console.log(myStr.slice()); // I am learning Js.
// console.log(myStr.slice(0)); // I am learning Js.
// console.log(myStr.slice(3)); // m learning Js.
// console.log(myStr.slice(2 , 4)); // (2, 3) am
// console.log(myStr.slice(6 , 8)); //  ea
// console.log(myStr.slice(-1)); //  .
// console.log(myStr.slice(-2)); //  s.



var myStr = "My name is Ruhama Malik. My favourite color is Black. My sister name is Irma Malik"


// console.log(myStr.slice(0, 18) + "Malik" +   myStr.slice(22) );


for(var i=0; i < myStr.length; i++){

    if(myStr.slice(i, i+5) === "Malik"){
      myStr=   myStr.slice(0, i) + "Gull" +   myStr.slice(i + 5)
    }

}

console.log(myStr);
