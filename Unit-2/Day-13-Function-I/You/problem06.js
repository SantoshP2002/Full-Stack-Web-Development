// Prime Number:-

function check_prime_or_not(number) {
  let count = 0;

  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      count++;
    }
  }
  // console.log(count);

  if (count == 2) {
    console.log(number, " is prime Number");
  } else {
    console.log(number, "is not prime number");
  }
}

for(let i=1; i<=50; i++){
    check_prime_or_not(i);
}
