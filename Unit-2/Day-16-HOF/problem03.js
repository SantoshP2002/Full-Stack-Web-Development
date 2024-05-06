let array = [1,2,3,4,5,6];

// Output ---> [1,4,9,16,25,36];

function print(array,number){
    output = [];
    for(let i=0; i<array.length; i++){
        output.push(array[i]**number);
    }
    console.log(output);
}

print(array,2)