let arry = [1,2,3,4,5,6,7];

// even: 3 Or odd: 3;

let even_count = 0;
let odd_count = 0;

for(let i=0; i<=arry.length; i++){
    if(i%2==0){
        even_count++;
    }
    else{
        odd_count++;
    }
}
console.log('even:',even_count,'odd:',odd_count);

