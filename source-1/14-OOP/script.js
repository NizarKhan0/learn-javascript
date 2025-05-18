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

const nizar = new Person('Nizar', 1991);
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