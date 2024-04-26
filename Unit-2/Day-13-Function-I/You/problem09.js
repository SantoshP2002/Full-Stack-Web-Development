// // function sum(a,b) {
// //     return a+b;
// //     // console.log(a+b);
// // }

// // let x = sum(2,3);
// // console.log(x);

// // function square(num) {
// //     console.log(num**2);
// // }

// // square(x);

// function checkEven(num) {
//   return num % 2 == 0;
// }

// if (checkEven(5)) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

function checkPrime(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    return true;
  } else {
    return false;
  }
}

// Find prime numbers from 1 to 20;

for (let i = 1; i <= 20; i++) {
  if (checkPrime(i)) {
    console.log(i, "is prime Number");
  } else {
    console.log(i, "is not prime number");
  }
}

for (let i = 0; i <= 10; i++) {
  if (checkPrime(i)) {
    console.log(i ** 2);
  }
}
