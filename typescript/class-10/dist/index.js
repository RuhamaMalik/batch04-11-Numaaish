"use strict";
////////////////   Generics
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// function merge  <T extends object, U extends object>(objA: T, objB: U){
//     return {...objA, ...objB}
// }
// const merged = merge({name:"Ruhama"}, {id:1})
// // console.log(merged);
// console.log(merged);
/////////////// Decorators
// function Logger (constructor:Function){
// console.log("Logger function call");
// }
// @Logger
// class Person{
//     name: string = "Ruhama"
//     constructor(){}
// }
// function Logger(message:string) {  // decorator factory
//     return function (constructor:Function) {  // actual decorator
//         console.log(message);
//     }
// }
// @Logger("Person Logger function call")
// class Person {
//     name: string = "Ruhama"
//     constructor() { }
// }
// @Logger("Animal Logger function call")
// class Animal {
//     name: string = "Cat"
//     constructor() { }
// }
/////////////////// 
function Logger(message) {
    return function (constructor) {
        console.log(message);
    };
}
function FillHTML(template, eleId) {
    return function (constructor) {
        // console.log(constructor);
        const person = new constructor();
        console.log(person.name);
        const container = document.getElementById(eleId);
        container.innerHTML = template;
        container.querySelector("h1").innerText = "Hello " + person.name;
    };
}
let Person = (() => {
    let _classDecorators = [Logger("Hello from Person"), FillHTML("<h1>Hello Person</h1>", "container")];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Person = _classThis = class {
        constructor() {
            this.name = "Ruhama";
        }
    };
    __setFunctionName(_classThis, "Person");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Person = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Person = _classThis;
})();
let Animal = (() => {
    let _classDecorators = [FillHTML("<h1>Hello Person</h1>", "container2")];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Animal = _classThis = class {
        constructor() {
            this.name = "Cat";
        }
    };
    __setFunctionName(_classThis, "Animal");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Animal = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Animal = _classThis;
})();
/////////////////// without decorator
class Persone {
    constructor() {
        this.name = "Ruhama";
    }
}
function FillHTMLL(template, eleId) {
    const person = new Persone();
    console.log(person.name);
    const container = document.getElementById(eleId);
    container.innerHTML = template;
    container.querySelector("h1").innerText = "Hello " + person.name;
}
FillHTMLL("<h1>Hello Person</h1>", "container");
function add(x, y) {
    // return x + y ;
    if (typeof x === "string" && typeof y === "string") {
        return x + y;
    }
    else if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else {
        throw new Error("Type not match");
    }
}
const result = add("Hello ", "World");
console.log(result.split(" "));
const result2 = add(5, 5);
console.log(result2.toFixed());
// const result = add("Hello ", "World") as string;
// console.log(result.split(" "));
// const result2 = add(5, 5) as number;
// console.log(result2.toFixed());
// const result3 = add(5, "5");
// console.log(result3); // error
//# sourceMappingURL=index.js.map