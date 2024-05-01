let array = [1,2,3,4,5,6,7,1,2,3,5,5,5];

let object = {};

for(let i=0; i<array.length; i++){
    if(object[array[i]] == undefined){
        object[array[i]] = 1;
    }

    else{
        object[array[i]]++;
    }
}
console.log(object);
let sum = 0;
for(let i in object){
    if(object[i] >= 2){
        console.log(i);
        sum = sum + Number(i);
    }
}
console.log(sum);