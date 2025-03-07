"use strict";
class Animal {
    constructor(_name) {
        this._name = _name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        if (!newName) {
            throw Error("Animal name  is not defined");
        }
        this._name = newName;
    }
}
// let animal1 = new Animal("cat") // Cannot create an instance of an abstract class
class Cat extends Animal {
    constructor(name, behaviour) {
        super(name);
        this.behaviour = behaviour;
    }
    makeSound() {
        console.log("Meow Meow Meow");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof Woof");
    }
}
let cat1 = new Cat("Bella", "scratch");
let dog1 = new Dog("German shephered");
console.log(cat1.makeSound());
console.log(dog1.makeSound());
/////////////// Singleton
// static method . propeties >>>> inka relation class se hota hai instance se nahi
class Util {
    constructor() { }
}
// let util1 = new Util()
// let util2 = new Util()
//# sourceMappingURL=index.js.map