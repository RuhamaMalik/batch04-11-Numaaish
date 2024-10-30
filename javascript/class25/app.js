// var email = "abc@gmail.com";
// var pswd = "1234";

// function getEmail (e){
//    e.preventDefault()

// var userEmail = document.getElementById("email").value
// var userPswd = document.getElementById("pswd").value

// if(userEmail === email && userPswd === pswd){
// alert("Login Successfuly!")
// }else{
//     alert("invalid Email or Password")
// }

// }

// <!-- Setting field values -->

// function fillCity() {
//   var cityName;
//   var zipCode = document.getElementById("zip").value;

//   switch (zipCode) {
//     case "1111":
//       cityName = "karachi";
//       break;
//     case "2222":
//       cityName = "Peshawar";
//       break;
//     case "3333":
//       cityName = "Islamabad";
//       break;
//     case "4444":
//       cityName = "Multan";
//       break;

//       default:
//         alert("Invalid zip code!")
//   }


//   if(cityName === undefined){

//       document.getElementById("city").value = "";
//   }
//    else{
//     document.getElementById("city").value = cityName;

//   }

// }


// Difference between innerText / innerHtml

// function useInnerText (){
//     var mydiv = document.getElementById("div1")
//     // console.log(mydiv.innerText);
//     mydiv.innerText = `New Text: <b>Div 1</b> ,,, abcd`
    
// }


// function useInnerHtml (){
//     var mydiv = document.getElementById("div1")
//     // console.log(mydiv.innerHTML);
//     mydiv.innerHTML = `New Text: <b>Div 1</b> ,,, abcd`

    
// }



// Reading and setting paragraph text

function expandPara (){
var str =`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi! 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi!
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi!
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi!
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi!
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi! 
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, eligendi! 
`


    document.getElementById("para").innerText = str
}


