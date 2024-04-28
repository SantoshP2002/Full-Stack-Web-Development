//Convert to Array to string 

let array = [1,2,3];

function array_to_string(a){
    output = "";
    for(let i=0; i<a.length; i++){
        output = output + a[i];
    }
    // console.log(typeof(output));
    return output;
}
let result = array_to_string(array);
console.log(result);