//values and variables

/*
let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");

//utk access dev console
console.log(11 + 8 + 23 - 8);


console.log("Nizar");
console.log(23);

let firstName = "Shari";
console.log(firstName);
console.log(firstName);
console.log(firstName);

//conventions for naming variables better lowercase
//camelCase
let firstNamePerson = "Nizar";
// PascalCase
let FirstNamePerson = "Nizar";
// snake_case
let first_name = "Nizar";
let $php = "php";
let PI = 3.1415;

console.log(firstNamePerson);

// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

let country = "Malaysia";
let continent = "Asia";
let population = 32;

console.log(country);
console.log(continent);
console.log(population);

*/


//Data Types

/*
//bool to string
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Nizar");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

//undifined to number
let year;
console.log(year);
console.log(typeof year);

year = 2001;
console.log(year);
console.log(typeof year);

//null
console.log(typeof null);

// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof population);
console.log(typeof country);
*/

//let, const and var

// let = benda yg akan berubah/bolh ubah
let age = 30;
age = 24;

// const = benda yg tak berubah dan tak boleh empty variable
const birthYear = 2001;
// birthYear = 1991; (error)
// const birthYear;

// var = old way define variable same as let (better jgn guna)
var job = "Programmer";
job = "Designer";


//not assign variable (jgn buat)
lastName = "roronoa";
console.log(lastName);

// LECTURE: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens

language = "Bahasa Melayu";
const country = "Malaysia";
const continent = "Asia";
const isIsland = false;
// isIsland = true; try ubah variable

console.log(language);
console.log(country);
console.log(continent);
console.log(isIsland);

