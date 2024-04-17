 let array = [-1000000,2,-30,3,-70,];

 let min = +Infinity;
 let max = -Infinity;

  for(let i=0;i<array.length; i++){
    if(array[i]<min){
        min = array[i];
    }
    if(array[i]>max){
        max = array[i];
    }
  }
  console.log('min:',min,'max:',max);