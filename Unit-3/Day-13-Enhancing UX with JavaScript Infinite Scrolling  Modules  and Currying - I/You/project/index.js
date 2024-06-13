let container = document.getElementById("container");

let flag = false;

let url = `https://jsonplaceholder.typicode.com/photos`;
let page = 1;

async function fetchData(page) {
  try {
    let res = await fetch(`${url}?_page=${page}&_limit=15`);
    let data = await res.json();
    displayData(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchData(page);

function displayData(data) {
  // container.innerHTML = "";

  data.forEach((ele) => {
    let cart = document.createElement("div");

    let image = document.createElement("img");
    image.src = ele.url;

    let title = document.createElement("h2");
    title.textContent = ele.title;

    cart.append(image, title);
    container.append(cart);
  });
  flag = true;
}

window.addEventListener("scroll", () => {
  let clientHeight = document.documentElement.clientHeight;
  let scrollHeight = document.documentElement.scrollHeight;
  let scrollTop = document.documentElement.scrollTop;

  console.log(clientHeight, scrollHeight, scrollTop);

  if (Math.ceil(scrollHeight - clientHeight) <= Math.ceil(scrollTop)) {
    console.log("Reaches to Bottom");
    page++;
    fetchData(page);
    flag = false;
  }
});
