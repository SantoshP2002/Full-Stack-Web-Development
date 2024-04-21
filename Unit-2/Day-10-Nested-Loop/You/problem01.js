
let str = "google"; // oogelg

let final = "";

for (let i = str.length / 2 - 1 ; i >= 0; i--) {
  final = final + str[i];
}
console.log(final);

for(let i=str.length-1; i>=str.length/2; i--){
    final = final + str[i];
}
console.log(final);





