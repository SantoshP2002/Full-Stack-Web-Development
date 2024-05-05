// let array =  ['sonu', 'monu', 'tonu','konu']

// ["unos","unom","unot","unok"]

let obj = {
    array:['sonu', 'monu', 'tonu','konu'],
    reverseArray: function(){
        let newArray = [];
        for(let i=0; i<this.array.length; i++){
            let reverse = "";
            for(let j = this.array[i].length-1; j>=0; j--){
                 reverse = reverse + this.array[i][j];
            }
            newArray.push(reverse); 
        }
            console.log(newArray);
    }
}
obj.reverseArray();