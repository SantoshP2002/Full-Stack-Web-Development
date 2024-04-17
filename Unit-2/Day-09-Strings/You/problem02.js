let a = [1,2,3,-1,-2,-3];

// Try replace all the negative element to 1 and all the Negative element to 0;

for(let i=0; i<a.length; i++){
    if(a[i]>0){
        a[i]=1
    }

    else{
        a[i]=0
    }
}
console.log(a);