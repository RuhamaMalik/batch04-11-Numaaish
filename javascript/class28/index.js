// console.log(document.childNodes[1].childNodes[2].childNodes[1]);

// NODEtYPE

//  element  > 1
//  attribute  > 2
//  comment  > 8
//  text node  > 3

// var div = document.getElementById("div3");

// console.log(div.childNodes);

// var pCount = 0;
// for (var i = 0; i < div.childNodes.length; i++) {
//   if (div.childNodes[i].nodeType === 1) {
//     pCount++;
//   }

//   if (pCount === 3) {
//     div.childNodes[i].innerHTML = "MY Para 3";
//   }
// }
// console.log(">>>>>>>>>>> ", pCount);


// console.log(document.childNodes[1].childNodes[2]);

// console.log(document.children[0].children[1] );

// var div = document.getElementById("div3");
// div.children[2].innerHTML = "Hello mai change hogya"
// console.log(div.children[2]);


var div = document.getElementById("div3");
//See Children
// console.log(div.firstChild);  // consider #text
// console.log(div.firstElementChild);  // ignore #text
// console.log(div.lastChild);
// console.log(div.lastElementChild);

// Parent
// var para4 = document.getElementById("para4");
// console.log(para4.parentElement);
// console.log(para4.parentNode); // both are same

//Siblings (behen bhai)

// var para4 = document.getElementById("para4");
// console.log(para4.nextSibling);// consider #text
// console.log(para4.nextElementSibling);  // ignore #text
// console.log(para4.previousSibling);// consider #text
// console.log(para4.previousElementSibling);  // ignore #text


// var para =  document.getElementById("para");

// console.log(para.nextElementSibling.nodeName); // P
// console.log(para.nextElementSibling.nodeName); // P
// console.log(para.parentElement.nodeName); // DIV


// var allPara = document.getElementsByTagName("p");
// console.log(allPara[0].childNodes[0].nodeValue);
// console.log(allPara[0].children[0].nodeValue);


var h1 = document.getElementById("heading");
// console.log(h1.hasAttribute("class")); // false
// console.log(h1.hasAttribute("id")); // false

// console.log(h1.getAttribute("class")); // null
// console.log(h1.getAttribute("id")); // heading

// console.log(h1.setAttribute("class", "myNewClass"));
// console.log(h1.setAttribute("class", "myNewClass2"));


// var para = document.getElementsByClassName("para1class");
// console.log(para[0].attributes);
// console.log(para[0].attributes.length);
// console.log(para[0].attributes);
