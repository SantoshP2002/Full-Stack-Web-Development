let url = `http://localhost:3000/products`;

let container = document.getElementById("container");

let displayData = (data) => {
  container.innerHTML = "";

  data.forEach((ele) => {
    let box = document.createElement("div");

    let image1 = document.createElement("img");
    image1.src = ele.image;

    let title1 = document.createElement("h3");
    title1.textContent = ele.title;

    let desc1 = document.createElement("p");
    desc1.textContent = ele.description;

    let category1 = document.createElement("p");
    category1.textContent = ele.category;

    let price1 = document.createElement("p");
    price1.textContent = ele.price;

    let rating1 = document.createElement("p");
    rating1.textContent = ele.rating.rate;

    box.append(image1, title1, desc1, category1, price1, rating1);
    container.append(box);
  });
};

let getData = async (url,queryPrams="") => {
  try {
    let res = await fetch(url,queryPrams);
    pagination(res.headers.get("X-total-Count"),6)
    let data = await res.json();
    console.log(data);
    displayData(data);
  } catch (error) {
    console.log(error);
  }
};

getData(`${url}?_page=1&_limit=6`);

let sortData = document.getElementById("sortData");
document.getElementById("sortData").addEventListener("change", () => {
  let sortValue = sortData.value;
  if (sortValue) {
    getData(`${url}?_sort=price&_order=${sortValue}`);
  } else {
    getData(url);
  }
});

let filterData = document.getElementById("filterData");
filterData.addEventListener("change", () => {
  let filterValue = filterData.value;
  let sortValue = sortData.value;

  if (filterValue) {
    getData(`${url}?_sort=price&_order=${sortValue}&category=${filterValue}`);
  } else {
    getData(url);
  }
});



let pagination = (totalCount, limit1) => {

  let total = totalCount;
  let limit = limit1;

  let noOfButtons = Math.ceil(total/limit);

  console.log(noOfButtons);




  let paginationBox = document.getElementById("pagination");
  paginationBox.innerHTML = ""
  for (let i = 1; i <= 4; i++) {
    let btn = document.createElement("button");
    btn.textContent = i;
    btn.addEventListener('click', ()=>{
      getData(`${url}?_page=${i}&_limit=6`)
    })
    paginationBox.append(btn)
  }
};

