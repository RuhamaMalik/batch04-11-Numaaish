
/////// SingleTon


// class Util {

//     private static instance: Util
//      static PI: string = "123456789"
//     private constructor() { }
//     static getInstance() {
//         if (!this.instance) {
//             this.instance = new Util();
//         }

//         return this.instance;
//     }

// }

// console.log(Util.PI);

// let util1 = new Util() // error




///////////// Ex

// interface ObjectType {theme:string , ln:string}

// class Config {


//     private static instance: Config;

//     private _settings:ObjectType = {
//         theme: "dark",
//         ln: "en"
//     }




//     private constructor() { }

//     static getInstance() {
//         if (!this.instance) {
//             this.instance = new Config();
//         }
//         return this.instance;
//     }


//     getSettings(key: string) {
//             return  this._settings[key as keyof ObjectType] 
//     }

// }


// let appConf1 = Config.getInstance();
// let theme = appConf1.getSettings("theme");


// let appConf2 = Config.getInstance();
// let ln = appConf2.getSettings("ln");

// console.log(appConf1 === appConf2) // 




////////////////// UNION / Intersection



type A = {
    name: string;
    age: number;
}

type B = {
    email: string;
    contact: number;
}


type C = A | B;

let person:C ={
    name: "string",
    age: 123,
    email: "string",
    contact: 1212,
    // abc:"jdjfd" // error

}



/////////////// intersection

type D = A & B


let person2:D ={
    name: "string",
    age: 123,
    email: "string",
    contact: 1212,

}
