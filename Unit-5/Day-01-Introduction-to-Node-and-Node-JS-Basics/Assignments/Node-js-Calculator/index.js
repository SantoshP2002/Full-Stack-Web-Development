// index.js

//  import the crypto module
const crypto = require("crypto");

//  get a commands using process.argv

const arguments = process.argv.slice(2);
const operation = arguments[0];
const number = arguments.slice(1).map(Number);

// complete the  function

// switch (operation) {

//     default:
//       console.log("Invalid operation");
//   }

const addition = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};

const subtraction = (array) => {
  let sub = array[0];
  for (let i = 1; i < array.length; i++) {
    sub = sub - array[i];
  }
  return sub;
};

const multiplication = (array) => {
  let multi = array[0];
  for (let i = 1; i < array.length; i++) {
    multi = multi * array[i];
  }
  return multi;
};

const division = (array) => {
  let divide = array[0];
  for (let i = 1; i < array.length; i++) {
    divide = divide / array[i];
  }
  return divide;
};




       

if (operation === "add") {
  console.log(addition(number));
} else if (operation === "sub") {
  console.log(subtraction(number));
} else if (operation === "multi") {
  console.log(multiplication(number));
} else if (operation === "divide") {
  console.log(division(number));
}

