let student = [
    {
        name:'santosh', age:22, location:'nanded',  // 0
    },
    {
        name:'madhav', age:21, location:'nanded',  // 1
    },
    {
        name:'sanket', age:20, location:'nanded',   //2
    }
]

for(let i=0; i<student.length; i++){
    if(student[i].age == 20){
        console.log(student[i]);
    }
}