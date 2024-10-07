
// for(var i = 1; i <= 100; i += 10){
// for(var j= i; j < i + 10; j++ ){
//     document.write("<center>" + " " +  j + " " + "</center>" );

// }
// // document.write("</br>")
// }




// var myStr = "My name is Ruhama Malik. My favourite color is Black. My sister name is Ruhama Malik"



// for(var i=0; i <= myStr.length-1; i++){

// if(myStr.slice(i , i+12 ) === "Ruhama Malik"){
//      myStr = myStr.slice(0, i) + "Sakina Khan" + myStr.slice(i+12)
// }
// }

// console.log(myStr);


// ///////////////////// String Methods (indexOf -- case sensitive --- return first match)

// var str = `The New m Yorker magazine doesn't allow the phrase "World War II. " They say it should
// be "the Second World War." `;


// console.log(str.indexOf("magazine")); // 17
// console.log(str.indexOf("War")); // 58
// console.log(str.indexOf("Apple")); // -1
// console.log(str.lastIndexOf("War")); //  108


// var firstCharIndex = str.indexOf("magazine"); // 10   -1

// if(firstCharIndex !==  -1 ){
//   str = str.slice(0, firstCharIndex) + "article" + str.slice(firstCharIndex + 8)
// }

// console.log(str);

////////////// CharAt

var str = `The New m Yorker magazine doesn't allow the Magazine "World War II. " They say it should
be "the Second World War."`;


// console.log(str.charAt()); // 0  ---- T
// console.log(str.charAt(0)); // 0  ---- T
// console.log(str.charAt(1)); // h
// console.log(str.charAt(str.length-1)); // "
// console.log(str.charAt(str.length-2)); // .

// str= str.replace("magazine", "article");
str= str.replace(/magazine/gi  , "article");

console.log(str);


















// for(var i=0; i < myStr.length; i++){

//     if(myStr.slice(i, i+5) === "Malik"){
//       myStr=   myStr.slice(0, i) + "Sakina Khan" +   myStr.slice(i + 5)
//     }

// }

// console.log(myStr);
