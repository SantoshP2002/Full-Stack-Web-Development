// import sum from "./utils.js"

import {sum, sub} from "./utils.js"




//  function greet(){
//     console.log("Hi");
//     return function (){
//         console.log("Hello");
//     }
//  }

//  console.log(greet());


// Currying Function
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       console.log(a + b + c);
//     };
//   };
// }

//  let a=sum()
//  console.log(a);
//  let b = a()
//  console.log(b);
//  b()
// sum(11)(2)(3);

// EX: 02
// function printName1(a,b,c)
// {
//     console.log(a,b,c);
// }

// printName1("Shrutika", "Renukadas", "Deshmukh")

// function printName(a){
//     return function(b){
//         return function(c){
//             console.log(a,b,c)
//         }
//     }
// }
// printName("Shrutika")("Renukadas")("Deshmukh")




// Import And Export =>

    
    console.log(sum(1,2));
    console.log(sub(11,2));



    console.log(sub(11234,2323));

