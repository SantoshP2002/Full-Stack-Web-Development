
import navBar from "./utils/navbar.js"



let navbarBox = document.getElementById("navBar")
navbarBox.innerHTML = navBar()

let url = `http://localhost:3000/todos`;

let btn = document.querySelector("button")
btn.addEventListener("click",()=>{
    createData()
});

async function createData(){
    try {
        let inputVal = document.getElementById("input1")
        inputVal.value;

        let obj = {
            title: inputVal.value,
            completed: true
        }
        let res = await fetch(url,{
            method: "POST",
            headers :{
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(obj)
        })

        window.location.href = "index.html" 
    } catch (error) {
        console.log(error);
    }
}