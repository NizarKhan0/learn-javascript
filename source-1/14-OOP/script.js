'use strict';

//constructor function

function Person(firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
    
    // Never do this
    // this.calcAge = function () {
    //   console.log(2037 - this.birthYear);
    // };
}

const nizar = new Person('Nizar', 2001);
console.log(nizar);

//1. New () is created
//2. function is called, this = {}
//3. {} linked to prototype
//4. function automatically return {}
//5. return object is assigned to the variable

const jessica = new Person('Jessica', 1996);
const matilda = new Person('Matilda', 2017);
console.log(jessica, matilda);

console.log(jessica instanceof Person); // true

//Prototypes

console.log(Person.prototype); // Person {constructor: ƒ}
Person.prototype.calcAge = function () {
    console.log(2025 - this.birthYear);
};
nizar.calcAge();
jessica.calcAge();
matilda.calcAge();

console.log(nizar.__proto__); // Person {constructor: ƒ, calcAge: ƒ}
console.log(nizar.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(nizar)); // true
console.log(Person.prototype.isPrototypeOf(jessica)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true

//.prototypeOfLinkedObjects

//ini inheritance
Person.prototype.species = 'Homo Sapiens';
console.log(nizar, jessica, matilda);

console.log(nizar.species); // Homo Sapiens
console.log(jessica.species); // Homo Sapiens
console.log(matilda.species); // Homo Sapiens

//untuk check property apa yg ada di object(Person)
console.log(nizar.hasOwnProperty('firstName')); // true
console.log(nizar.hasOwnProperty('species')); // false

//prototypal inheritance

console.log(nizar.__proto__);
//Object.prototype ( top of the prototype chain)
console.log(nizar.__proto__.__proto__);
console.log(nizar.__proto__.__proto__.__proto__);

//utk debug dia mcm console.log
console.dir(Person.prototype.constructor); // ƒ Person(firstName, birthYear)

const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
    return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

//Coding Challenge #2

//1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h
//2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console
//3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console
//4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' on both of them

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}
Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.brake();
