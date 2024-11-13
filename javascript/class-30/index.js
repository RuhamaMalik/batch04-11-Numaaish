// //////// OBJECTS

// var obj = {
//     key : "value" ,
//     propertyName : "propertyValue"
// }

// console.log(obj);

// var students = [studen1 , student2]

// var student = {
//   "student name": "Ruhama",
//   "class": 1,
//   subjects: ["Eng", "Com", "Math" , {sub1 : "Isl" , sub2: "Urdu"}],
//   isEntrolled: true,
//   rollNo: "0001",
//   address: {
//     street: "Line 1",
//     zipCode: 1000,
//     city: "Karachi",
//   },
// };

// console.log(student);

//  Dot Notation / static
// console.log(student.name);
// console.log(student.subjects[2]);
// console.log(student.address.street);

// Bracket Notation / Dynamic

// console.log(student["rollNo"]);
// console.log(student.class);
// console.log(student["subjects"][1]);
// console.log(student["subjects"][3].sub1);
// console.log(student["subjects"][3]["sub2"]);

// console.log(student.student name); // error
// console.log(student["student name"]);

// var  propName = "grade";
// var propValue = "A+";

// var student = {
//     "student name": "Ruhama",
//     "class": 1,
//     subjects: ["Eng", "Com", "Math" , {sub1 : "Isl" , sub2: "Urdu"}],
//     isEntrolled: true,
//     rollNo: "0001",
//     [propName] : propValue,
//     // [propName] : propName,
//     address: {
//       street: "Line 1",
//       zipCode: 1000,
//       city: "Karachi",
//     },
//   };

//   console.log(student.grade);

///////////////////// Modify Object

// var bike = {
//   name: "Honda225",
//   brand: "honda",
//   color: "red",
//   model: 2020,
// };

// console.log(bike);

// bike["model"] = 2025;
// bike.price = 400000;
// delete bike.color;

// console.log(bike);

// console.log("color" in bike ); // false
// console.log("model" in bike ); // true

///////////////// METHODS

// function greet (){
//     console.log("hello pagal");

// }

// greet()

// var user = {
// name : "Ruhama",
// email : "ruhama@gmail.com",
// greet : function (){
//     // console.log("hello pagal");
//     return  "hello" + this.name ;
// },
// getHelpWelcome : function (text){
//     // console.log("hello pagal");
//     return  "hello " + this.name + " " + text ;
// }
// }

// console.log(user.greet());
// console.log(user.getHelpWelcome("How can I help you?"));
// console.log(user);

var mobile = {
  brand: "Samsung",
  model: "s4 ultra",
  battery: 80,

  makeCall: function (number) {
    console.log(" Calling... ", number);
  },
};

mobile.makeCall("043473434");
mobile.makeCall("859892132");
mobile.makeCall("698743222");
