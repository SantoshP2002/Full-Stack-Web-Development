let arr = [10, 24, 56, 72, -10, -88, 100, 564];

let oddIndex = arr.filter(function(ele, i){
    return i%2 == 1;
});

let sum = oddIndex.reduce(function (acc, value){
    return acc + value;
}, 0);


let average = sum / oddIndex.length;

console.log(oddIndex);
console.log(average);
    
