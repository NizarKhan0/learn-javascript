// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

//function

/*

function logger()
{
    console.log('My name is Nizar');
}

// calling / running / invoking function
logger();
logger();
logger();


function fruitProcessor(apples, oranges)
{
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}


const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));


const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
// console.log(fruitProcessor(2, 4));

*/

// function declaration & function expression

// function declaration (boleh letak variable sebelum / selepas function)

// const age1 = calAge1(2001);
// function calAge1(birthYear){
//     return 2025 - birthYear;
// }

// console.log(age1);

// function expression

// const calAge2 = function (birthYear){
//     return 2025 - birthYear;
// }

// const age2 = calAge2(2001);
// console.log(age2);

//Arrow function

// const calAge3 = birthYear => 2025 - birthYear;
// const age3 = calAge3(2001);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2025 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(2001, 'Nizar'));

//Function calling another function

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));


//Review Functions

// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired 🎉`);
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(2001, 'Nizar'));

//Coding Challenge

// const calAverage = (a, b, c) => (a + b + c) / 3;

// console.log(calAverage(3, 6, 9));

// const scoreDolphins = calAverage(44, 23, 71);
// const scoreKoalas = calAverage(65, 54, 49);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgDolphins < 2 * avgKoalas) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log('No team wins...');
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(576, 111);


//Intro to Arrays (sama je mcm PHP)

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);

// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Nizar';
// const nizar = [firstName, 'Muhammad', 2025 - 2001, 'teacher', friends];
// console.log(nizar);
// console.log(nizar.length);


//Exercise

// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// const ages = [age1, age2, age3];
// console.log(ages);


//Basic Array

/*

//push method (add element to the end of the array)
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Nizar');
console.log(friends);
console.log(newLength);

//unshift method (add element to the beginning of the array)
friends.unshift('Zoro');
console.log(friends);

//pop method (remove element from the end of the array)
const popped = friends.pop();
console.log(friends);
//utk tahu element yg di remove
console.log(popped);

//shift method (remove element from the beginning of the array)
const shifted = friends.shift();
console.log(friends);
//utk tahu element yg di remove
console.log(shifted);

//indexOf method (mencari index element dalam array)
console.log(friends.indexOf('Steven'));
//xde
// console.log(friends.indexOf('Zuss'));

//includes method (mencari apakah ada element dalam array)
console.log(friends.includes('Steven'));
//false
// console.log(friends.includes('Zuss'));

friends.push(23);
console.log(friends.includes('Nizar'));
console.log(friends.includes('Luffy'));
console.log(friends.includes(23));

if(friends.includes('Steven')){
    console.log('You have a friend called Steven');
}else{
    console.log('You do not have a friend called Steven');
}

//Coding Challenge

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

*/

//Intro to Objects

// const nizar = {
//     firstName: 'Nizar',
//     lastName: 'Muhammad',
//     age: 2025 - 2001,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(nizar.firstName);
// console.log(nizar['lastName']);
// const nameKey = 'Name';
// console.log(nizar['first' + nameKey]);
// console.log(nizar['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Nizar? Choose between firstName, lastName, age, job, and friends');

// if (nizar[interestedIn]) {
//     console.log(nizar[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

// nizar.location = 'Malaysia';
// nizar['twitter'] = '@Nizar';
// console.log(nizar);


//Dot vs. Bracket Notation

// const nizar = {
//     firstName: 'Nizar',
//     lastName: 'Muhammad',
//     age: 2025 - 2001,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(`${nizar.firstName} has ${nizar.friends.length} friends, and his best friend is called ${nizar.friends[0]}`);


//Object Methods

const nizar = {
    firstName: 'Nizar',
    lastName: 'Muhammad',
    birthYear: 2001,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calAge: function (birthYear) {
    //     return 2025 - birthYear;
    // },

    // calAge: function () {
        // console.log(this);
    //     return 2025 - this.birthYear;
    // },

    calAge: function () {
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
};

// console.log(nizar);
// console.log(nizar.calAge());
// console.log(nizar.age);


// console.log(nizar.calAge(2001));
// console.log(nizar['calAge'](2001));

//Challenge
// "Nizar is a 24-year old teacher, and he has a driver's license"
console.log(nizar.getSummary());

