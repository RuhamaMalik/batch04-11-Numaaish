///////////// Encapsulation



// class Product {
//     constructor(
//         private id: number,
//         private name: string,
//         private price: number

//     ) { }

//     public getId(): number {
//         return this.id
//     }
//     public getName(): string {
//         return this.name
//     }
//     public getPrice(): number {
//         return this.price
//     }

// }



// let product1 = new Product(1, "Shampoo", 400);

// console.log(product1.getPrice());



//////////////////// getter / setter


class Product {
    constructor(
        private _id: number,
        private _name: string,
        private _price: number,
     

    ) { }

    get id() {
        return this._id
    }


    get name() {
        return this._name
    }


    get price() {
        return this._price
    }



    set name(value: string) {
        if (!value) {
            throw Error("Name cannot be empty")
        }

        this._name = value
    }



}



// let product1 = new Product(1, "Shampoo", 400);

// console.log(product1.price);


// product1.name =  "Soap"

// console.log(product1.name);



//////////// Inheritence

// parent class / super / base
// child class /  sub /  drived





class ClothingProduct extends Product {

    constructor(
        id: number,
        name: string,
        price: number,
        private _size: "S" | "M" | "L" | "XL",
        private _fabric: "lawn" | "silk" | "velvet" /// inky getter or setter aap banaen
        
    ) {
        super(id , name, price)

    }

}


let tShirt = new ClothingProduct(1,"Shirt", 600, "S" , "velvet" );
console.log(tShirt);



class ElectricProduct extends Product {

    constructor(
        id: number,
        name: string,
        price: number,
        private _model: string,
        private _brand: "Sony" | "Samsung" | "Dowlance" /// inky getter or setter aap banaen
        
    ) {
        super(id , name, price)

    }

}

let washingMachine = new ElectricProduct(1,"Washing Machine", 42000, "2025" , "Dowlance" );
console.log(washingMachine);

