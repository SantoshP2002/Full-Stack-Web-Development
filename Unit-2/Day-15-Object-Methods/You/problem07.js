let obj = {
    array: ['santosh', 'madhav', 'pavan', 'sanket'],

    print:function(){
        for(let i=0; i<this.array.length; i++){
            console.log(this.array[i]);
        }
    }
};

obj.print();