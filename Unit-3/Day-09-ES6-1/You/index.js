// function hi(){
//     console.log('Welcome to Masai School');
// }

// hi()


// const hi = ()=>{
//     console.log('hello');
//    return 3
// }
// console.log(hi());



// Object shortHand

// function user(name, age){

//     let obj = {
//         name,
//         age,
//     }
//     console.log(obj);
// }

// user('santosh', 22)




// Default Parameter =>

// function user(name, age,city="amdura"){

//     let obj = {
//         name,
//         age,
//         city,

//     }
//     console.log(obj);
// }

// user('santosh', 22, 'mudkhed')



// Ternary Operator =>

    // let Name = "";

    // if(Name){
    //     console.log('Yes');
    // }
    // else{
    //     console.log("No");
    // }

    // Name?console.log('Yes'):console.log("No");

    // (5>4)?console.log('Yes'):console.log("No");



    // for...of loop

    // let array = ['Batman', 'Superman', 'Ironman', 'aquaman']
    // for(let value of array){
    //     console.log(value);
    // }


    // rest and Spread Operator (...)

        // -- rest 

    // function sum (...rest){
    //     console.log(rest);
    // }

    // sum(1,2,3,4)

// EX: 02

// function sum (first, second,...rest){
//         console.log(first, second,rest);
//     }
//     sum(1,2,3,4)


   // Spread Operator =>


    // EX:01
    // let arr1 = [1,2,3,4];

    // let arr2 = [5,6,7,8];

    // let arr3 = [...arr1, ...arr2, 9,10];

    // console.log(arr3);

    // EX:02
    // let obj1 = {name:'Santosh', age:22};

    // let obj2 ={gender:'Male'};

    // let obj3 ={...obj1, ...obj2};
    // console.log(obj3); 


    // Destructuring =>

        // EX:01
        // let arr1 = [1,2,3,45]

        // let [first, second, third, fourth] = arr1;

        // console.log(second);

        //EX:02
        // let obj = {
        //     FirstName:'Santosh',
        //     LastName: 'Pawar',
        //     age: 22

        // }

        // let {FirstName,LastName,age} = obj

        // console.log(FirstName,LastName,age);

        //EX:03
        // Object in Object

        let user ={
            id: 334,
            name: 'Santosh',
            age: 22,
            education :{
                degree: 'Masters'
            }
        }

        let {education} = user  

        let {degree} = education
        console.log(degree);
        