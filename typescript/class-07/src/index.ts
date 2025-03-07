abstract class Animal {
    constructor(private _name: string) {
    }

    get name(): string {
        return this._name
    }

    set name(newName: string) {
        if (!newName) {
            throw Error("Animal name  is not defined")
        }

        this._name = newName
    }

    abstract makeSound(): void

}



// let animal1 = new Animal("cat") // Cannot create an instance of an abstract class


class Cat extends Animal {
    constructor( name:string , public behaviour: string) {
     super(name)
    }

    makeSound(): void {
        console.log("Meow Meow Meow");

    }
}
class Dog extends Animal {
    makeSound(): void {
        console.log("Woof Woof");

    }
}


let cat1 = new Cat("Bella" , "scratch");
let dog1 = new Dog("German shephered");

console.log(cat1.makeSound());
console.log(dog1.makeSound());



/////////////// Singleton

// static method . propeties >>>> inka relation class se hota hai instance se nahi

class Util {
    constructor(){}
}

// let util1 = new Util()
// let util2 = new Util()