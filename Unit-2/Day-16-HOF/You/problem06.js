
// Filter method: -->
// Syntax :
// arrayName.filter(function(element, Index){})




// let bag = [];
// for(let i=0; i<array.length; i++){
//     if(array[i]%2==0){
//         bag.push(array[i])
//     }

// }
// console.log(bag);

let array = [1, 2, 3, 4, 5, 6];

let output = array.filter(function (i) {
  return i % 2 == 0;
});
console.log(output);

// let array = [1,2,3,4,5,6];

// let output = array.map(function(i){
//      if(i %2 ==0){
//         return i;
//      }
// })
// console.log(output);
