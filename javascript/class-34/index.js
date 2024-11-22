// function checkValidEmail() {

//     ///// abc@.com  5 - 3  2
//   var addressIsLegal = true;
//   var eEntered = document.getElementById("email").value;

//   if (eEntered.indexOf(" ") !== -1) {
//     addressIsLegal = false;
//   }
//   if (
//     eEntered.indexOf("@") < 1 ||
//     eEntered.indexOf("@") > eEntered.length - 5
//   ) {
//     addressIsLegal = false;
//   }
//   if (
//     eEntered.indexOf(".") - eEntered.indexOf("@") < 2 ||
//     eEntered.indexOf(".") > eEntered.length - 3
//   ) {
//     addressIsLegal = false;
//   }
//   if (addressIsLegal === false) {
//     alert("Please correct email address");
//     return false;
//   }
// }

//  function checkValidEmail() {
//      var eEntered = document.getElementById("email").value;
//      var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
//      if (!(eEntered.match(regex))) {
//      alert("Please correct email address");
//      return false;
//      }
//      }

// function checkPassword() {
//   try {
//     var pass = document.getElementById("f1").value;
//     if (pass.length < 8) {

//       throw "Please enter at least 8 characters.";
//     }
//     if (pass.indexOf(" ") !== -1) {

//       throw "No spaces in the password, please.";
//     }
//     var numberSomewhere = false;
//     for (var i = 0; i < pass.length; i++) {
//         //// isNan(8)    false    isNan(a)  true
//       if (isNaN(pass[i]) === false) {
//         numberSomewhere = true;
//         break;
//       }
//     }
//     if (numberSomewhere === false) {
//       throw "Include at least 1 number.";
//     }
//   } catch (err) {
//     alert(err);
//   }
// }

// var myBtn = document.getElementById("btn");
// myBtn.onclick = alert("Hello")

// myBtn.addEventListener("click", function(){
//     alert("Hello")
// })

// myBtn.addEventListener("click", showAllert)

// function showAllert(){
//     alert("Hello")
// }

var products = [
  {
    id: 1,
    title: "Product 1",
    description: "Lorem ipsum dolor sit amet consectetur.",
    price: 23,
    quantity: 5,
    image:
      "https://primathon.in/blog/wp-content/uploads/2024/05/image-1-12-1.jpg",
  },
  {
    id: 2,
    title: "Product 2",
    description: "Lorem ipsum dolor sit amet consectetur.",
    price: 55,
    quantity: 15,
    image:
      "https://primathon.in/blog/wp-content/uploads/2024/05/image-1-12-1.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Lorem ipsum dolor sit amet consectetur.",
    price: 66,
    quantity: 8,
    image:
      "https://primathon.in/blog/wp-content/uploads/2024/05/image-1-12-1.jpg",
  },
  {
    id: 4,
    title: "Product 4",
    description: "Lorem ipsum dolor sit amet consectetur.",
    price: 23,
    quantity: 5,
    image:
      "https://primathon.in/blog/wp-content/uploads/2024/05/image-1-12-1.jpg",
  },
  {
    id: 5,
    title: "Product 5",
    description: "Lorem ipsum dolor sit amet consectetur.",
    price: 23,
    quantity: 5,
    image:
      "https://primathon.in/blog/wp-content/uploads/2024/05/image-1-12-1.jpg",
  },
];

// var productSection = document.getElementById("card-section");

for (var i = 0; i < products.length; i++) {
  var card = document.createElement("div");
  card.setAttribute("class", "card mx-auto");
  card.setAttribute("style", "width: 18rem;");
  var cardContent = `
  <img src="${products[i].image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${products[i].title}</h5>
          <p class="card-text">${products[i].description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>`;
card.innerHTML =  cardContent;

document.getElementById("card-section").appendChild(card)

}


console.log("abc " + varName + "dfdfdf");
console.log(`abc  ${varName}  dkjfkdjfd`);
