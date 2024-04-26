function multi(a, b) {
  return a * b;
}
let result = multi(2, 5);

function check_odd_even(num) {
  if (num % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
check_odd_even(result);

function checking(z) {
  if (z > 2) {
    console.log("less than 2");
  } else {
    console.log("not less than 2");
  }
}
checking(result);