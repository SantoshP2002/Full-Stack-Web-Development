// Increment Operator:++
// let num = 1
// while(num<=10){
//     console.log(num, "Breakfast");
//     num++;
// }

// Decrement Operator:--
// let num = 5;
// while (num >= 1) {
//   console.log(num, "Lunch");
//   num--;
// }

// Even Number:
// let num = 0;

// while (num <= 10) {

//   if (num % 2 == 0) {
//     console.log(num);
//   }
//   num++;
// }

// Odd Number:
// let num = 0;
// while (num <= 15) {
//   if (num % 2 == 1) {
//     console.log(num);
//   }
//   num++;
// }

let num = 0;
let sum = 0;
while (num < 10) {
  if (num % 3 == 0) {
    console.log(num);
    sum = sum + num;
  }
  num++;
}
console.log(sum);

