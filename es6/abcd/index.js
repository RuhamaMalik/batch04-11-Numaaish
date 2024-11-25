// var a =  5;

// function myFunv (){
//     var a =  5;

// a = 3
// }

// console.log(a);



// function a (){

// }


// function b (a , num){
//  return a(num)
// }


// b(a , 2)



var global = "global variable";

// console.log(global);


function checkScope(){
   // console.log(global); // accesss
   var local = "local variable";
   //console.log(local); // accesss

   if(true){
//console.log(local);// accesss

   }

}


console.log(local);

checkScope()