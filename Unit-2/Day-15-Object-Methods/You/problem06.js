let obj = {
    length:5,
    width:3,
    area:function(){
        console.log('area-',(this.length*this.width));
    },
    perimeter:function(){
        console.log('perimeter-',2*(this.length+this.width));
    }
}

obj.area();
obj.perimeter();