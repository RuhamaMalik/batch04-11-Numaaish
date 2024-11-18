// function ObjectConstructor (uname , uAge){
// this.name = uname,
// this.age  =  uAge
// }

// var user1 = new ObjectConstructor("Ruhama" , 10)
// var user2 = new ObjectConstructor("Hajra" , 11)

// console.log(user1);
// console.log(user2);

// function Student(uname, uAge) {
//   (this.name = uname),
//     (this.age = uAge),
//     (this.getStudentge = function () {
//       return "Student age : " + this.age;
//     });
// }

// Student.prototype.greet = function () {
//   return "Hello " + this.name;
// };

// Student.prototype.className = "5a";

// var stu1 = new Student("Ruhama", 10);
// var stu2 = new Student("Hajra", 11);





// console.log("name" in stu1); // check property exist or not
// console.log("greet" in stu1);

// console.log(stu1.hasOwnProperty("name"));
// console.log(stu1.hasOwnProperty("greet"));

// console.log(stu1);
// console.log(stu1.greet());
// console.log(stu2.greet());

// var arr = ["hello ", "hello2"]
// console.log(arr);


//////////////////////////////


function Student(uname, uAge) {
    (this.name = uname),
      (this.age = uAge),
      (this.getStudentge = function () {
        return "Student age : " + this.age;
      });
  }
  
  Student.prototype.greet = function () {
    return "Hello " + this.name;
  };
  
  Student.prototype.className = "5a";
  
  var stu1 = new Student("Ruhama", 10);
  var stu2 = new Student("Hajra", 11);
  
  
/////////////// for in loop for obj 
//   for(var prop in stu1){
// console.log("property name " , prop);
// console.log("property value " ,stu1[prop]);

// if(stu1.hasOwnProperty(prop)){
//     console.log("property name " , prop);
//     console.log("property value " ,stu1[prop]);
    
// }



//   }
  
  