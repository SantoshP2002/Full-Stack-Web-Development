// check_even_or_odd(12);

function check_even_or_odd(number){
    if(number%2==0){
        console.log(number,"is even");
    }

    else{
        console.log(number,"is odd");
    }
}

for(let i=1; i<=10; i++){
    check_even_or_odd(i);
}