
class Student {
    name: string;
    rollNo: number;
    constructor(n: string, r: number) {
        this.name = n;
        this.rollNo = r;
    }

}


let student1 = new Student("Ruhama", 123);
let student2 = new Student("Hajra", 456);

// console.log(student1);
// console.log(student2);


//////////// Access Modifiers 1) public  2) private 3) protected

// class Person {
//     public name: string;
//     private age: number;

//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a
//     }
// }


// const person1 = new Person("Sonia" , 10);

// console.log(person1);
// console.log(person1.name);
// console.log(person1.age); // error


// class Person {
// constructor(public name: string, private age: number) {
// }
// }


// const person1 = new Person("Sonia" , 10);

// console.log(person1);



///////////////// readonly

// class Car {
//     constructor(public name: string, public model: number, public cName: string, readonly price: number) {
//     }
// }

// let car1 = new Car("Haval", 2022, "havalH6", 6399000 );

// console.log(car1);
// car1.model = 2025;
// console.log(car1);
// // car1.price = 6399111


////////////////////////////////////////

// class Employee {
//     // public futureData: string= ""
//     private skills: string[] = []
//     constructor(public name: string, private id: number, readonly salary: number) {

//     }
// }


// const employee1 = new Employee("Ali", 1, 30000);
// console.log(employee1);
// employee1.skills.push("Next js")
// employee1.skills.push("TypeScript")
// employee1.skills.push("SQL")

// console.log(employee1);

// // employee1.skills.length = 0;
// employee1.skills = []

// console.log(employee1);


class Teacher {
    private skills: string[] = []
    constructor(public name: string, private id: number, readonly salary: number) {

    }


    addSkill(skill: string) {
        this.skills.push(skill)
    }
}


const employee1 = new Teacher("Ruhama", 1, 30000);
console.log(employee1);

employee1.addSkill("Python")
console.log(employee1);
// employee1.skills = []
