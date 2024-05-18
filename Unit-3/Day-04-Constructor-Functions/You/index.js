// let user = {
//     name: 'santosh',
//     age: 22,
//     printName : function(){
//         console.log(this);
//     }
// }
// user.printName();


// Call, Apply, Bind Methods

// 1. Call()

// let user1 = {
//     name: "santosh",
//     age: 22,
// }

// let user2 = {
//     name: 'surya',
//     age: 23,
// }

// function printName(city, gender){
//     console.log(this.name,city,gender);
// }

// printName.call(user2,'Nanded','male') 


// Apply()
// printName.call(user2,['Nanded','Male']);


// Bind()
// let bindUser = printName.bind(user1,'Nanded','Male')
// console.log(bindUser());






//  Factory Function :=>
function studentDetails(name,age){
    let studentObj ={}

    studentObj.name = name;
    studentObj.age = age;

    return studentObj


};
let result = studentDetails('santosh',22);
let result2 = studentDetails('surya',23)
console.log(result);
console.log(result2);

// EX: 02 => Factory Function 
// function childernDetails(hobbies,color){
// let childernObj = {};

// childernObj.hobbies = hobbies;
// childernObj.color = color;

// return childernObj;

// }

//  let details = childernDetails('cricket','purple')
//  console.log(details);