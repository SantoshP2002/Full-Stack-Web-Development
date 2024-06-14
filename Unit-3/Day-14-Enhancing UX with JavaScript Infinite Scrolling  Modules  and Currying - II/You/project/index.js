import navBar from "./utils/navbar.js"



let navbarBox = document.getElementById("navBar")
navbarBox.innerHTML = navBar()


let url = `http://localhost:8080/todos`;

let container = document.getElementById("container");
let displayData = (data) => {
  container.innerHTML = ""

  data.forEach((ele) => {
    let box = document.createElement("div");

    let title = document.createElement("h2");
    title.textContent = `Title : ${ele.title}`

    let completed = document.createElement("p");
    completed.textContent = `Completed : ${ele.completed}`
    
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete"
    deleteBtn.addEventListener("click",async()=>{
        try {
           
            let res = await fetch(`${url}/${ele.id}`,{
                method: "DELETE",
                headers :{
                    'Content-Type' : 'application/json'
                }
            })
    
            window.location.href = "index.html" 
        } catch (error) {
            console.log(error);
        }
    })

    let toggle = document.createElement("button");
    toggle.textContent = "Toggle"

    box.append(title, completed,deleteBtn,toggle);
    container.append(box);
  });
};

let getData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();

    console.log(data);
    displayData(data);
  } catch (error) {
    console.log(error);
  }
};

getData(url);
