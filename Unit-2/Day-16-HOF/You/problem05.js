
// Map Method: -->
// Syntax :--> 
// arrayName,.Map(function(Element, Index){})



//  let array = [12,34,56,79,85]

// let result =  array.map(function(num){
//     return num**2;
//  })

//  console.log(result);


// // Original array
// let numbers = [1, 2, 3, 4, 5];

// // map() ka use karke har element ko double karke naya array banate hain
// let doubledNumbers = numbers.map(function(num) {
//   return num * 2;
// });

// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// let array = [1,2,3,4,5,6,7,9];

// let result = array.map(function(num){
//   return num + 2;
// })
// console.log(result);


// let array = [1,2,3,4,56,6,78,];

// let result = array.map(function(value){
//   return value - 10;
// })
// console.log(result);

// Output = > [-9,-8,-7,-6,46,-4,68];

let number = [1,2,3,4,6,7,8,9];
 
let result = number.map(function(num){
    return num * 2;
})
console.log(result);