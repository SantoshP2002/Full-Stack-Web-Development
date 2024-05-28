// EX: 01
// let arr = [1, 2, 3, 4];

// function oddNumber(arr, cb) {
//   setTimeout(() => {
//     let arrFilter = arr.filter(function (ele) {
//       return ele % 2 == 1;
//     });
//     cb(arrFilter);
//   }, 1000);
// }

// // EX: 02
// function multiply(arr, val, cb) {
//   setTimeout(() => {
//     let mulData = arr.map(function (ele) {
//       return ele * val;
//     });
//     cb(mulData);
//   }, 2000);
// }

// EX: 03
// function findSum(arr, cb) {
//   setTimeout(() => {
//     let sum = arr.reduce(function (acc, curr) {
//       return acc + curr;
//     }, 0);
//     cb(sum);
//   }, 3000);
// }

// Answer =>
// CallBack Hell -:
// oddNumber(arr, function (result) {
//   console.log(result);
//   multiply(result, 5, function (result1) {
//     console.log(result1);
//     findSum(result1, function (result2) {
//       console.log(result2);
//     });
//   });
// });

// multiply(arr, 5, function (result1){
//     console.log(result1);
// });

// findSum(arr, function(result2){
//     console.log(result2);
// })

// Promises =>
// EX: 01

// let isEvent = true;    // false

// //Producer
// let p1 = new Promise(function(resolve,reject){
//   if(isEvent){
//     resolve('The Event Is Happening On 30th March');
//   }

//   else{
//     reject('Event Is Not Happening')
//   }
// });

// // Consumer
// // console.log(p1);
// p1.then(function(val1){
//   console.log(val1);
// })
// .catch(function(val2){
//   console.log(val2);
// });

// promise with function use
// EX: 02

// let isMarried = true; // false

// //Producer
// function createPromise(isMarried) {
//   return new Promise(function (resolve, reject) {
//     if (isMarried) {
//       resolve("Married");
//     } else {
//       reject("Not Married");
//     }
//   });
// }

// // Consumer
// createPromise(isMarried)
//   .then(function (val1) {
//     console.log(val1);
//   })
//   .catch(function (val2) {
//     console.log(val2);
//   });

let arr = [1, 2, 3, 4];

function oddNumber(arr) {
  return new Promise(function (res, rej) {
    setTimeout(() => {
      let arrFilter = arr.filter(function (ele) {
        return ele % 2 == 1;
      });
      res(arrFilter);
    }, 1000);
  });
}

// EX: 02
function multiply(arr,val) {
  return new Promise(function(res, rej){
    setTimeout(() => {
      let mulData = arr.map(function (ele) {
        return ele * val;
      });
      res(mulData)
    }, 2000);
  })
}

// EX: 03
function findSum(arr) {
 return new Promise(function(res, rej){
  setTimeout(() => {
    let sum = arr.reduce(function (acc, curr) {
      return acc + curr;
    }, 0);
    res(sum)
  }, 3000);
 })
}

// Answer =>
// CallBack Hell -:
// oddNumber(arr)
// .then(function (val1) {
//   console.log(val1)
//   multiply(val1, 5)
// .then(function(val2){
//   console.log(val2);
//   findSum(val2)
// .then(function(val3){
//   console.log(val3);
// })
// });
// });





  

// oddNumber(arr, function (result) {
//   console.log(result);
//   multiply(result, 5, function (result1) {
//     console.log(result1);
//     findSum(result1, function (result2) {
//       console.log(result2);
//     });
//   });
// });


// Imp Topic =>
// Async- await  => try{}, catch{}

async function consume(){
  try{
    let p1 = await  oddNumber(arr);
  console.log(p1);
  let p2 = await multiply(p1, 5);
  console.log(p2);
  let p3 = await findSum(p2);
  console.log(p3);
  }

  catch(Error){
    console.log(Error);
  }
}
consume();