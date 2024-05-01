let flipkart = [

    {type:'monitor', brand:'MSI', price:100,},
    {type:'camera', brand:'canon', price:200,},
    {type:'toy', brand:'lego', price:300,},
    {type:'printer', brand:'hp', price:400,},
    {type:'monitor', brand:'zebronics', price:500,},
    
]

let query = 'monitor';

for(let i=0; i<flipkart.length; i++){
    if(flipkart[i].type == query){
        console.log(flipkart[i]);
    }
}