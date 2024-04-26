// Find the prime number

let number = 10;
let factor = 0;
for (let i = 1; i <= number; i++) {
  if (number % i == 0) {
    factor++;
  }
}
// console.log(factor);

if (factor == 2) {
  console.log(number, "is prime number");
} else {
  console.log(number, "is not prime number");
}
