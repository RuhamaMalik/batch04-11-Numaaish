// var cities = ["Karachi", "Peshawar", "Islamabad"," Skardu", "Lahore"];

// cities.push("Quetta", "Multan");
// // cities.pop();
// var removeCity = cities.pop();
// console.log(cities); // 
// console.log('remove City :' ,removeCity);

//  SHIFT / UNSHIFT (start)

// var cities = ["Karachi", "Peshawar", "Islamabad"," Skardu", "Lahore"];

// cities.unshift("Quetta", "Multan");

// console.log(cities);

// var removeCity  = cities.shift();
// cities.shift();
// console.log(cities);
// console.log(removeCity);

// //////////////// Slice (Shallow copy) / Splice (change original array)

// var x = 5;
// var y = x ;

// y= 6;

// console.log(x); // 5
// console.log(y); // 6



// var languages = ["English", "Pashto", "Urdu"," Gujrati", "Punjabi"];
// var myFavLang = languages; // direct reference

// myFavLang[2] = "Sindhi";

// console.log(languages);
// console.log(myFavLang);

// var languages = ["English", "Pashto", "Urdu"," Gujrati", "Punjabi", ["nested" ], ["Aquafina"]];
// var myFavLang = languages.slice();  // Shallow copy

// myFavLang[2] = "Sindhi";
// // myFavLang[5][0] = "Sindhi";


// var newCopy = myFavLang.slice();
// console.log(languages);
// console.log(myFavLang);
// // console.log(newCopy);


//  slice(startIndex , EndIndex(excluded))

// var fruits = ["Apple" , "Banana", "Mango", "Orange", "Grapes"];

// var myFavFruits = fruits.slice(2); // "Mango", "Orange", "Grapes"
// var myFavFruits = fruits.slice(2, 4); // 2 ,3
// var myFavFruits = fruits.slice(-2 ); // "Orange", "Grapes"  // -2 -1 0 1 2
// var myFavFruits = fruits.slice(-2 , -1); // Orange

// console.log(myFavFruits);





// document.write("<h1> Second Method </h1>")