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