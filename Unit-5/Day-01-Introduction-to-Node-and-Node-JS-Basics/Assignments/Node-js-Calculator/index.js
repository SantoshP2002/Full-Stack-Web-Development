//  import the crypto module
const { log } = require("console");
const crypto = require("crypto");

//  get a commands using process.argv

const arguments = process.argv.slice(2);
const operation = arguments[0];
const numbers = arguments.slice(1).map(Number);

if (operation === "add" && numbers.length == 2) {
  console.log(numbers[0] + numbers[1]);
} else if (operation === "sub" && numbers.length == 2) {
  console.log(numbers[0] - numbers[1]);
} else if (operation === "mult" && numbers.length == 2) {
  console.log(numbers[0] * numbers[1]);
} else if (operation === "divide" && numbers.length == 2) {
  console.log(numbers[0] / numbers[1]);
} else if (operation === "sin" && numbers.length === 1) {
  console.log(Math.sin(numbers[0]));
} else if (operation === "cos" && numbers.length === 1) {
  console.log(Math.cos(numbers[0]));
} else if (operation === "tan" && numbers.length === 1) {
  console.log(Math.tan(numbers[0]));
} else if (operation === "random" && numbers.length === 1) {
  crypto.randomBytes(numbers[0], (err, buf) => {
    if (err) {
      console.log(err);
    } else {
      console.log(buf.toString("binary"));
    }
  });
} else if (operation === "random" && number.length < 1) {
  console.log("Provide length for random number generation.");
} else {
  console.log("Invalid operation");
}
