// ternary Operator ;

// (condition)? true statement: false statement;

let a = 5;

let b = 10;

a > b
  ? console.log(`${a} is greater than ${b}`)
  : b > a
  ? console.log(`${b} is greater than ${a}`)
  : a == b
  ? console.log(`${a} is equal to ${b}`)
  : console.log("invalid inputs");
