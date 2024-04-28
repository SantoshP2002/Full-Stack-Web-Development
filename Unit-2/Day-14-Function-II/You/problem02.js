// reverse Loop On Array with use Function;

// ['utas', 'unag', 'urhs', 'uner'] // Output

function reverse(str) {
  let A = "";
  for (let i = str.length - 1; i >= 0; i--) {
    A += str[i];
  }
  return A;
}

let array = ["satu", "ganu", "shru", "renu"];

let Output = [];
for (let i = 0; i < array.length; i++) {
  let result = reverse(array[i]);
  Output.push(result);
}
console.log(Output);
