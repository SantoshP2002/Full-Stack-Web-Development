
function switchCase(char) {
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for (let i = 0; i < lower.length; i++) {
        if (lower[i] == char) {
            return upper[i];
        }
    }
    return char;
}
// console.log(switchCase("c"));
let str = "my name is santosh pawar and my age is 22 years";

let bag = "";
for (let i = 0; i < str.length; i++) {

  if (i == 0) {
    bag += switchCase(str[i]);
  } 
  else if (str[i] == " ") {
    bag += str[i] + switchCase(str[i + 1]);
    i++;
  }
   else {
    bag += str[i];
  }
}
console.log(bag);
