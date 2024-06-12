let url = `http://localhost:3000/todos`;

//Display data

let displayData = (data) => {
  let container = document.getElementById("root");
  container.innerHTML = "";

  data.forEach((ele) => {
    let box = document.createElement("div");
    box.setAttribute("id", "box");

    let id = document.createElement("p");
    id.textContent = ele.id;

    let title = document.createElement("p");
    title.textContent = ele.title;

    let complete = document.createElement("p");
    complete.textContent = ele.completed;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", async () => {
        try {

            // DELETE -- Method
          let res = await fetch(`${url}/${ele.id}`, {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            }
          });
          let data = await res.json();
          getData()
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      });

    let Toggle = document.createElement("button");
    Toggle.textContent = "Toggle";
    // Toggle.addEventListener("click", async () => {
    //     try {
    //         let obj1 = {completed : !ele.completed}
    //         // console.log(obj1); 

    //         // Update ---- PATCH
    //       let res = await fetch(`${url}/${ele.id}`, {
    //         method: "PATCH",
    //         headers: {
    //           'Content-Type' : 'application/json',
    //         },
    //         body: JSON.stringify(obj1)
            
    //       });
    //       let data = await res.json();
    //       getData()
    //     //  console.log(data);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   });

    Toggle.addEventListener("click", async () => {
        try {
            let obj1 = {title: 'pooja',completed : !ele.completed}
            // console.log(obj1); 

            // Update ---- PATCH
          let res = await fetch(`${url}/${ele.id}`, {
            method: "PUT",
            headers: {
              'Content-Type' : 'application/json',
            },
            body: JSON.stringify(obj1)
            
          });
          let data = await res.json();
          getData()
        //  console.log(data);
        } catch (error) {
          console.log(error);
        }
      });
    

    box.append(id, title, complete, deleteBtn, Toggle);
    container.append(box);
  });
};

// Read --- > (get)

let getData = async () => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    displayData(data);
  } catch (error) {
    console.log(error);
  }
};

getData();
