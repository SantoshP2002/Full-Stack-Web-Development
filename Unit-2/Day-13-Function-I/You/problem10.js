let char = "@";

function checkCharCase(char) {
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < lower.length; i++) {
    if (lower[i] == char) {
      return "lowercase";
    } else if (upper[i] == char) {
      return "uppercase";
    }
  }
  return char;
}
console.log(checkCharCase(char));
