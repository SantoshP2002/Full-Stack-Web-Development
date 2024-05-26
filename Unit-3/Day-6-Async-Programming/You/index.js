
// Synchronous Programming =>
// function sayName() {
//   console.log("name :", myVar);

//   function sayAge() {
//     myVar = 22;
//     console.log("Age :", myVar);
//   }
//   sayAge();
// }
// myVar = "santosh";
// sayName();


// blocking of code and non-blocking of code =>

//     console.log('Hi');
//     for(let i=0; i<700000000; i++){

//     }
//     console.log('Welcome to Masai School');
//      console.log('Pyare Mohan Ji');


//  SetTimeOut OR SetInterval =>

// console.log('hii');
// function sayName(){
//     console.log('My Name is Santosh');
// }
// // sayName()
// setTimeout(sayName, 3000);

// console.log('Hello');



// clearTimeOut =>

//  let id = setTimeout(function (){console.log('Maya')}, 2000)
//  console.log(id);

//  clearTimeout(id)

// setInterval();

// let set1 = setInterval(function(){console.log('Masai')} , 1000)
// clearInterval(set1)


// function sayName(){
//     console.log('My Name is Santosh');
// }
// // sayName()
// setInterval(sayName, 2000);

// /EX: 01
// let count = 0;

// let id = setInterval(function(){
//     count++;
//     console.log(count);
//     document.querySelector('h1').textContent = count
// },1000)

// document.querySelector('button').addEventListener('click', function(){
//     clearInterval(id)
// })


// Other Ex =>

//     console.log('Start');

//     function f1(){
//         console.log('fn1');
//     }
//     function f2(){
//         console.log('fn2');
//     }
//     function f3(){
//         console.log('fn3');
//     }

//     setTimeout(f1,4000);
//     setTimeout(f2,0);
//     setTimeout(f3,3000);

//     console.log('Code End');


//     console.log(1);
//     console.log(2);

//     setTimeout(()=>{console.log('setTimeOut');},3000);
//     Promise.resolve().then(()=>{console.log('Promises')});

//     console.log(3);
//     console.log(4);