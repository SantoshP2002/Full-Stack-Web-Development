let array = ["santosh", "madhav", "ganesh", "sanket", "nagesh",'samiksha'];
let array2 = "";

// Convert array in object :=

let object = {};

for (let i = 0; i < array.length; i++) {
  //  syntax
  object[array[i]] = 1;
}

console.log(object);
