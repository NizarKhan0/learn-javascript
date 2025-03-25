'use strict';

// Default Parameters
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {

    // ES6 Default Parameters
    // numPassengers = numPassengers || 1;
    // price = price || 199;


  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);

//Passing arguments: Value vs Reference

const flight = 'LH234';
const nizar = {
  name: 'Nizar Khan',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked In');
  } else {
    alert('Wrong Passport!');
  }
};

checkIn(flight, nizar);
console.log(flight);
console.log(nizar);


// Is the same as doing...
// const flightNum = flight;
// const passenger = nizar;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
}

newPassport(nizar);
checkIn(flight, nizar);

