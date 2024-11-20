// function openWindow (){
//     var monkeyWindow = window.open();
//     var windowContent = `<h1>Capuchin monkey</h1><img src= 'monkey.jpg'><p>The word capuchin derives from a
//    group of friars<br>named the Order of Friars Minor Capuchin who wear<br>brown
//    robes with large hoods covering their heads.</p>`;
//    monkeyWindow.document.write(windowContent);
// }

//  function checkForPopBlocker() {
//      var testPop = window.open("", "","width=100,height=100");
//      if (testPop === null || typeof(testPop === "undefined")) {
//      alert("Please disable your popup blocker.");
//     }
//    testPop.close();
//    }

// function checkForLastName(e) {
//     e.preventDefault()
//   var targetField = document.getElementById("lastNameField");
//   if (targetField.value.length === 0) {
//     alert("Please enter your last name");
//     targetField.focus();
//     targetField.style.background = "crimson";
//     return false;
//   }
//   targetField.style.background = "white";

//   console.log(targetField.value);

// }

// function checkForSelection(e , id , message) {
//     e.preventDefault()
//   if (document.getElementById(id).selectedIndex === 0) {
//     alert(message);
//     return false;
//   }

//   console.log(document.getElementById(id).value);

// }

// function validateRadios(e) {
// //   e.preventDefault();
//   var radios = document.getElementsByName("r1");
//   for (var i = 0; i < radios.length; i++) {
//     if (radios[i].checked) {
//       return true;
//     }
//   }
//   alert("Please check one.");
//   return false;
// }

// function validateZIP(e) {
//     e.preventDefault();
//   var valueEntered = document.getElementById("zip").value;
//   var numChars = valueEntered.length;
//   if (numChars < 5) {
//     alert("Please enter a 5-digit code.");
//     return false;
//   }
//   for (var i = 0; i < numChars; i++) {
//     var thisChar = parseInt(valueEntered[i]);
//     if (isNaN(thisChar)) {
//       alert("Please enter only numbers.");
//       return false;
//     }
//   }

//   console.log(valueEntered);
  
// }


alert("before");

try {
    alet("center")
} catch (error) {
    console.log(error);
    
}finally{
  console.log("mai chalta hi hun har waqt");
    
}

alert("after");
