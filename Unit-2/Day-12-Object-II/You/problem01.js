let obj = {};

// 1.Adding into the object;

obj.name = "santosh";
obj.age = 22;
console.log(obj);

// 2.Update the value inside the object.

obj.age = 23;
console.log(obj);

// 3.Delete the key and value.

delete obj.name;
console.log(obj);

// 4.run a loop over the object;
for (let i in obj) {
  console.log(i);
}

