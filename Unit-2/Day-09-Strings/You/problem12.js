// let arr = [1, 2, 3, 4, 5];

// // [5,4,3,2,1];

// for (let i = arr.length; i >= 1; i--) {
//   if (i == 0) {
//   }
//   console.log(i);
// }

let str = "masai";

let bag = 0;

for (let i = str.length - 1; i >= 0; i--) {
  bag = bag + str[i];

  console.log(str[i]);
  
}

