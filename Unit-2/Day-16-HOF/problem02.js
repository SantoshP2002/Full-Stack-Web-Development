let array = [1, 2, 3, 4, 5, 6, 7];

let divided = (number) => {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
};
// let result = divided(23);
// console.log(result);

function print(array) {
  for (let i = 0; i < array.length; i++) {
    if (divided(array[i]) == true) {
    //   console.log(array[i]);

        return output;
    }
  }
}
let result = print(array);
console.log(result);
