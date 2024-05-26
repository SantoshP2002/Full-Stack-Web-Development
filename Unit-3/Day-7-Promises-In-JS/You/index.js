// EX: 01
let arr = [1, 2, 3, 4];

function oddNumber(arr, cb) {
  setTimeout(() => {
    let arrFilter = arr.filter(function (ele) {
      return ele % 2 == 1;
    });
    cb(arrFilter);
  }, 1000);
}

// EX: 02
function multiply(arr, val, cb) {
  setTimeout(() => {
    let mulData = arr.map(function (ele) {
      return ele * val;
    });
    cb(mulData);
  }, 2000);
}

// EX: 03
function findSum(arr, cb) {
  setTimeout(() => {
    let sum = arr.reduce(function (acc, curr) {
      return acc + curr;
    }, 0);
    cb(sum);
  }, 3000);
}

// Answer =>
// CallBack Hell -:
oddNumber(arr, function (result) {
  console.log(result);
  multiply(result, 5, function (result1) {
    console.log(result1);
    findSum(result1, function (result2) {
      console.log(result2);
    });
  });
});

// multiply(arr, 5, function (result1){
//     console.log(result1);
// });

// findSum(arr, function(result2){
//     console.log(result2);
// })
