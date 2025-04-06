'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = function (movements, sort = false) {
  movements.forEach(function(movement, i) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${movement}€</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}
// console.log(account1);
// Display movements
displayMovements(account1.movements);


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE METHOD

// console.log(arr.slice(2)); // [ 'c', 'd', 'e' ]
// console.log(arr.slice(2, 4)); // [ 'c', 'd' ]
// console.log(arr.slice(-2)); // [ 'd', 'e' ]
// console.log(arr.slice(-1)); // [ 'e' ]
// console.log(arr.slice(-2, -1)); // [ 'd' ]
// console.log(arr.slice(1, -2)); // [ 'b', 'c', 'd' ]

//SPLICE METHOD

// console.log(arr.splice(2)); // [ 'c', 'd', 'e' ]
// console.log(arr); // [ 'a', 'b' ]
// console.log(arr.splice(-1)); // [ 'b' ]
// console.log(arr); // [ 'a' ]
// console.log(arr.splice(1, 2)); // [ 'b', 'c' ]
// console.log(arr); // [ 'a', 'd', 'e' ]
// console.log(arr.splice(1, 1)); // [ 'd' ]
// console.log(arr); // [ 'a', 'e' ]
// console.log(arr.splice(0, 1)); // [ 'a' ]
// console.log(arr); // [ 'e' ]
// console.log(arr.splice(-1)); // [ 'e' ]
// console.log(arr); // []
// console.log(arr.splice(0)); // []


//REVERSE METHOD

// arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.reverse()); // [ 'e', 'd', 'c', 'b', 'a' ]
// console.log(arr); // [ 'e', 'd', 'c', 'b', 'a' ]
// arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.reverse()); // [ 'e', 'd', 'c', 'b', 'a' ]

// CONCAT METHOD

// const letters = arr.concat(['f', 'g', 'h']);
// console.log(letters); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]
// console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]
// const letters2 = [...arr, ...['f', 'g', 'h']];
// console.log(letters2); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]
// console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]
// const letters3 = ['f', 'g', 'h'].concat(arr);
// console.log(letters3); // [ 'f', 'g', 'h', 'a', 'b', 'c', 'd', 'e' ]
// console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

// JOIN METHOD
// const str = arr.join(' - ');
// console.log(str); // 'a - b - c - d - e'
// console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]
// const str2 = arr.join(' ');
// console.log(str2); // 'a b c d e'
// console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]
// const str3 = arr.join('');
// console.log(str3); // 'abcde'
// console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]
// const str4 = arr.join(' - ');
// console.log(str4); // 'a - b - c - d - e'

/*
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('Nizar'.at(2)); // N
*/


//Looping array forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

// 0: function(200);
// 1: function(450);
// 2: function(-400);

