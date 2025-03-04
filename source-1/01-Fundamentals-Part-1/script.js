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

/*
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
*/

// Basic Operators

/*
//Math Operators
const now = 2025;
const ageNizar = now - 2001;
const ageShari = now - 2003;
console.log(ageNizar, ageShari);

console.log(ageNizar * 2, ageNizar / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 8
// 2 ** 0.5 = square root of 2 = 1.4142135623730951

const firstName = "Nizar";
const lastName = "Khan";
console.log(firstName + " " + lastName);

//Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--; // x = x - 1
console.log(x);

//Comparison Operators
console.log(ageNizar > ageShari); // >, <, >=, <=, ==, === (!==)
console.log(ageShari >= 18);

const isFullAge = ageShari >= 18;
console.log(now - 2001 > now - 2003);

// LECTURE: Basic Operators
// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese'

let country = "Malaysia";
let continent = "Asia";
let language = "Bahasa Melayu";
let population = 35028030; // Original population

// Task 1: Split population
console.log(population / 2); // 17514015

// Task 2: Increase population by 1
population++;
console.log(population); // 35028031

// Task 3: Compare with Finland's population
console.log(population > 6000000); // true (35M > 6M)

// Task 4: Compare with average population
console.log(population < 33000000); // false (35M > 33M)

// Task 5: Create description
const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description);
// "Malaysia is in Asia, and its 35028031 people speak Bahasa Melayu"

*/

//Operator Precedence

// const now = 2025;
// const ageNizar = now - 2001;
// const ageShari = now - 2003;

// console.log(now - 2001 > now - 2003);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageNizar + ageShari) / 2;
// console.log(ageNizar, ageShari, averageAge);


//Coding Challenge 1

// BMI = mass / height ** 2; OR BMI = mass / (height * height);

// let markWeight = 78;
// let markHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.95;

// let markBMI = markWeight / markHeight ** 2;
// let johnBMI = johnWeight / (johnHeight * johnHeight);
// let markHigherBMI = markBMI > johnBMI;

// console.log(markBMI, johnBMI, markHigherBMI);


//String and Template Literals

// const firstName = 'Nizar';
// const job = 'Programmer';
// const birthYear = 2001;
// const year = 2025;

// const nizar = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(nizar);

// const nizarNew = `I'm ${firstName}, a ${2025 - birthYear} years old ${job}!`;
// console.log(nizarNew);

// console.log(`Just a regular string...`);

// console.log('String with \n\t tab and new line characters');

// console.log(`String with
// multiple
// lines`);


//Taking decisions: if / else statements

//Eligibility to driving license
/*
const age = 19;
// const isOldEnough = age >= 18;

if (age >= 18) {
    console.log(`Sarah can start driving license 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}


const birthYear = 2001;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);



// LECTURE: Taking Decisions: if / else Statements
// 1. If your country's population is greater that 33 million, log a string like this to the
// console: 'Portugal's population is above average'. Otherwise, log a string like
// 'Portugal's population is 22 million below average' (the 22 is the average of 33
// minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original


const country = "Malaysia";
const population = 35028031;
const averagePopulation = 33000000;

if (population > averagePopulation) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${averagePopulation - population} million below average`);
}
    */

/*
//Type Conversion

const inputYear = '2001';
console.log(Number(inputYear), inputYear);
console.log(inputYear) + 18;

console.log(Number('Nizar'));
console.log(typeof NaN);

console.log(String(23));

//Type Coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);
*/

// Truthy and Falsy values

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Nizar'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 0;
// if (money) {
//     console.log("Don't spend it all");
// } else {
//     console.log('You should get a job!');
// }

// // 0 = false;
// // '' = false;
// let height = 0;
// if (height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is UNDEFINED');
// }



//Equality Operators

// === strict operator

// == loose operator

// const age = 18;

// if(age === 18) console.log('You just became an adult :D (strict)');

// if(age == 18) console.log('You just became an adult :D (loose)');

// prompt("What's your favorite number?");
// // const favoriteNumber = prompt("What's your favorite number?");
// const favoriteNumber = Number(prompt("What's your favorite number?"));
// console.log(favoriteNumber);
// console.log(typeof favoriteNumber);

// if(favoriteNumber === 23) { //23 === 23 -> FALSE
//     console.log('Cool! 23 is an amazing number!');
// }else if(favoriteNumber === 7) {
//     console.log('7 is also a cool number');
// }else {
//     console.log('Number is not 23 or 7');
// }

// if(favoriteNumber !== 23) console.log('Why not 23?');

// let woke = false;

// if(woke){
//     console.log('You will be the WINNER!');
// }else{
//     console.log('You are the LOOSER!'); 
// }

// LECTURE: Equality Operators: == vs. ===
// 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have?');
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// == for now)
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1
// 4. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this
// situation

// $numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if($numNeighbours === 1){
//     console.log('Only 1 border!');
// }else if($numNeighbours > 1){
//     console.log('More than 1 border');
// }else{
//     console.log('No borders');
// }

// console.log($numNeighbours);
// console.log(typeof $numNeighbours);


//Boolean logic: AND, OR, NOT

/*
&& = AND
|| = OR
! = NOT
*/

/*

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); //true

console.log(hasDriversLicense || hasGoodVision); //true

console.log(!hasDriversLicense); //false

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log('Sarah is able to drive!');
}else{
    console.log('Someone else should drive...');
}


// LECTURE: Logical Operators
// 1. Comment out the previous code so the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a
// country that speaks english, has less than 50 million people and is not an
// island.
// 3. Write an if statement to help Sarah figure out if your country is right for her.
// You will need to write a condition that accounts for all of Sarah's criteria. Take
// your time with this, and check part of the solution if necessary.
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
// not, log 'Portugal does not meet your criteria :('
// 5. Probably your country does not meet all the criteria. So go back and temporarily
// change some variables in order to make the condition true (unless you live in
// Canada :D)


let country = 'Malaysia';
let language = 'English';
let population = 35028031;
let isIsland = false;

if(language === 'English' && population < 50000000 && !isIsland){
    console.log(`You should live in ${country} :D`);
}else{
    console.log(`${country} does not meet your criteria :(`);
}

//Coding challenge

let dolphineScore = (96 + 108 + 89) / 3;
let koalaScore = (88 + 91 + 110) / 3;

if(dolphineScore > koalaScore){
    console.log(`Dolphine wins with ${dolphineScore} points`);
}else if(koalaScore > dolphineScore){
    console.log(`Koala wins with ${koalaScore} points`);
}else{
    console.log('Draw');
}


//Switch statements


const day = 'sunday'; // 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
}else if (day === 'tuesday') {
    console.log('Prepare theory videos');
}else if (day === 'wednesday' || day === 'thursday'){
    console.log('Write code examples');
}else if (day === 'friday'){
    console.log('Record videos');
}else if (day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend :D');
}else{
    console.log('Not a valid day!');
}

*/

//Statement and expressions

// 3 * 4
// 1991
// true && false && !false

// if (23 > 10) {
//     const str = '23 is bigger';
// }

// console.log(`I'm ${2037 - 1991} years old`);

// //Conditional (ternary) operator


// const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');


// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);


// let drink2;
// if (age >= 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }
// console.log(drink2);


// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

// The issue is with the string interpolation. In JavaScript, you need to use backticks (`)
//      instead of single quotes for template literals. Here's the corrected code:

const bill = 40;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
