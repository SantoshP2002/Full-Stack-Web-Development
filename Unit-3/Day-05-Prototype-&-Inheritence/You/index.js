// let obj = new Object();
// obj.age = 22
// console.log(obj);

// let arr = new Array();
// console.log(arr);

// let str = new String();
// console.log(str);

// OBJECT CHAINING =>

// 01. Object.create =>
// let obj1 = {
//     name: 'santosh',
// }
// // console.log(obj1);

// let obj2 = Object.create(obj1);
// obj2.age = 22

// let obj3 = Object.create(obj2)
// obj3.place = 'Nanded'

// console.log(obj3);

// 02. setPrototypeOf =>  __proto__
// let son = {
//   skinTone: "brown",
// };
// // console.log(son);

// let father = {
//   hair: "curly",
// };
// // son.__proto__=father
// Object.setPrototypeOf(son, father);
// // console.log(son);

// let grandeFather = {
//   height: "taller",
// };
// // father.__proto__ = grandeFather
// Object.setPrototypeOf(father, grandeFather);
// console.log(son);
// console.log(son.__proto__);
// console.log(son.__proto__.__proto__);
// console.log(son.__proto__.__proto__);
// console.log(son.__proto__.__proto__.__proto__);

// Factory Function =>
// EX: 01 =>
// let userData = {
//   Hello: function () {
//     console.log("Hello.." + this.name);
//   },
//   //   Hi: function (gender) {
//   //     console.log("Hello.." + hfuf);
//   //   },
// };

// function user(name, age, city) {
//   obj = {};
//   Object.setPrototypeOf(obj, userData);
//   obj.name = name;
//   obj.age = age;
//   obj.city = city;

//   return obj;
// }

// let result = user("santosh", 22, "nanded");
// result.Hello();
// console.log(result);

// let result2 = user("ankush", 44, "pune");
// result2.Hello();
// console.log(result2);

// EX: 02 =>
// let  personData = {
//     hi : function(){
//         console.log('Hi');
//     }
// }
//     Object.setPrototypeOf(personData, userData)

// function person(name,age,city,gender){
//     let obj = user(name,age,city)

//     Object.setPrototypeOf(obj,personData)

//     obj.gender = gender

//     return obj;
// }

// let p1 = person('santosh',22,'nanded', 'Male');
// p1.hi()
// console.log(p1);

// Constructor Function =>

User.prototype.Hello = function () {
  console.log("Hello.." + this.name);
};
  User.prototype.Hi = function (gender) {
    console.log("Hello.." + lklokl);
  };
  function User(name, age, city) {
    // Object.setPrototypeOf(obj, userData);
    this.name = name;
    this.age = age;
    this.city = city;
  };

let result = new User("santosh", 22, "nanded");
result.Hello();
console.log(result);

let result2 = new User("ankush", 44, "pune");
result2.Hello();
console.log(result2);
