let array = ["santosh", "madhav", "santosh", "sanket", "madhav",'samiksha'];

let object = {};

for(let i=0; i<array.length; i++){
    if(object[array[i]] == undefined){
        object[array[i]] =1; // add
    }

    else{
        object[array[i]]++;  // Update
    }
}
console.log(object);