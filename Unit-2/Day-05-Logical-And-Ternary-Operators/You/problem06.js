// Switch Case :

// Syntax :-

// switch(condition){
//     case value1: result;
//     break;

//     case value2 : result;
//     break;

//     case value3 : result;
//     break;

//     default: result;
// }

let customer = "friday";

switch (customer) {
  case "sunday": {
    console.log("today is sunday");
    break;
  }
  case "monday":{
    console.log("today is monday");
    break;
  }
  case "saturday":{
    console.log("today is saturday");
    break;
  }
  default:{
    console.log("no any day present");
  }
}
