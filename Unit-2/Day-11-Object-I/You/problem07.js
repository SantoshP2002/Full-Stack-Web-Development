let details = {
  name: "santosh",
  father_name: "shivajirao",
  mother_name: "gokarna",
  age: 22,
  city: "nanded",
  pincode: 431606,
};


// Delete the key and value in object;

// Dot Notation :=

delete details.pincode;
delete details.age;
console.log(details);



// Bracket Notation :=

delete details['age'];
console.log(details);