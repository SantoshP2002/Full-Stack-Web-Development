 function print(num1, num2) {
      if (num1 === num2) {
        console.log("both values and datatypes are same");
      } else if (num1 == num2) {
        console.log("only values are same but datatypes are different");
      } else if (typeof num1 == typeof num2 && num1 != num2) {
        console.log("datatype are same but values are different");
      } else {
        console.log("both values and datatypes are not equle");
      }
    }
    
    print(5,5)
    print(5,"5")
    print("Ankush", "Santosh")
    print(10, "5")