// Find the prime number from 1 to 10;
// 2,3,5,7;

for (let i = 1; i <= 10; i++) {
  let number = i;
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
}
