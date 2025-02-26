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

const age1 = calAge1(2001);
function calAge1(birthYear){
    return 2025 - birthYear;
}

console.log(age1);

// function expression

const calAge2 = function (birthYear){
    return 2025 - birthYear;
}

const age2 = calAge2(2001);
console.log(age2);