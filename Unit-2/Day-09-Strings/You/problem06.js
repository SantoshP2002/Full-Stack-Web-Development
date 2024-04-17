//  let a = [1,2,3];

//  a[0] = 'hello';

//  console.log(a);

let name = "santosh";

// let bag ="";
// for(let i=1; i<name.length; i++){
// }
// console.log(bag);
let bag = "";
for (let i = 0; i < name.length; i++) {
  if (i == 0) {
    continue;
  }
  bag = bag + name[i];
}
console.log(bag);
