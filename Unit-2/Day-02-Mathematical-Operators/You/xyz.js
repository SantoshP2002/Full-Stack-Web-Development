function animal(noOfLegs, vegetarian) {
    let obj = {};
    
  // write your code here
    obj.noOfLeges = noOfLegs;
    obj.vegetarian = vegetarian;
    
    
    return obj;
  }
  
  // example invocation
  let a1 = animal(4,true);
  // let a2 = animal(2,false);
  
  // a1.eat() // eating...
  // a1.greet() // Hi, I have 4 legs.
  
  console.log(a1);
  // console.log(a2);