let name = 'santoh';

let obj = {
    name: name,
    print: function(){
        console.log(this.name);
    }

}
// obj.print()

console.log(this.name);