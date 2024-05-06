let array = ["I", "am", "santosh", "pawar"];

function print(arr, separator) {
  let bag = "-";

  for (let i = 0; i < arr.length; i++) {
    if (i == arr.length - 1) {
      bag += arr[i];
    }
   else if (separator == undefined) {
      bag += arr[i] + ",";
    } else {
      bag += arr[i] + separator;
    }
  }
  console.log(bag);
}

print(array);
print([], "-");
// print(array, "`");
// print(array, "!");
// print(array, "@");
// print(array, "#");
// print(array, "$");
// print(array, "%");
// print(array, "^");
// print(array, "&");
// print(array, "*");
// print(array, "-");
// print(array, "+");
