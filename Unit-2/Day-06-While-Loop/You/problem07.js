// print the sum of all the multiply by 3 for 0 to 6;

// 1. I want to find the sum;
// 2. I only want the number which are divisible by 3;


let number = 0;
let sum = 0;
while(number<=6){
    if(number%3==0){
        // console.log(number)
        sum = sum + number;
    }
    number++;
}
console.log(sum);