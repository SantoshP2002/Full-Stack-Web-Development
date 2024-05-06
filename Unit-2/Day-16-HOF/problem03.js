
// Output ---> [1,4,9,16,25,36];

function print(arr,number){
    output = [];
    for(let i=0; i<arr.length; i++){
        output.push(arr[i]**number);
    }
    console.log(output);
}

let array = [1,2,3,4,5,6];
print(array,2)