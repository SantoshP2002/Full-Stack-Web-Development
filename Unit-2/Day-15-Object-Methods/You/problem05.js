let details = {
    name: 'santosh',
    age: 22,
    address: 'nanded',
    print:function(){
        let obj = {
            name: 'nagesh',
            sayHi: function(){

                console.log(this.name);
            }
        }
        obj.sayHi()
    }
}
details.print();


// console.log(details);