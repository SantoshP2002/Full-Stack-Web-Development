// C
// R
// U
// D

// Create ---- POST


let url = `http://localhost:3000/todos`;
document.querySelector("button").addEventListener("click", () => {
  createTodo();
});

let createTodo = async () => {
  let todoVal = document.getElementById("title");
  try {
    // console.log(todoVal);

    let obj = {
      title: todoVal.value,
      completed: true,
    };

    let res = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    let data = await res.json();

    window.location.href = "index.html"

    console.log(data);
  } catch (error) { 
    console.log(error);
  }
};
