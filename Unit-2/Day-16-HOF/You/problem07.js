// Sort Method (Sorting): --->
// Syntax:
// arrayName.sort(function(1st Element, 2nd Element){});

let array = [131,345,6567,688,879,433,2214,566];

let result = array.sort(function(num1,num2){
    return num1 - num2;
})
console.log(result);

// let arr = [1, 10, 100, 2, 4, 40, 5]; // [1,2,3,4,10,40,100]


// let result = arr.sort(function (num1, num2) {
//   return num1 - num2;
// });

// console.log(result);



// let arrrr = ["a","b","c","d","aa","ab"];

// arrrr.sort((a,b)=>{
//     return a-b
// });

// console.log(arrrr);