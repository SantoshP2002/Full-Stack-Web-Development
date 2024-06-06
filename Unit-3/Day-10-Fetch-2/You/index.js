// then & catch  method =>
// fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=672cc668`)
// .then((res) => res.json())
// .then((data)=>  console.log(data))

// try, catch and async and await method =>

    let container = document.getElementById('container')

    document.getElementById('searchBtn').addEventListener('click',()=>{

        let searchVal = document.getElementById('searchData');
        console.log(searchVal.value);
        getData(searchVal.value)
    })

let api = `https://www.omdbapi.com/?i=tt3896198&apikey=672cc668`;

let getData = async (searchVal) => {
  try {
    let res = await fetch(`${api}&s=${searchVal}`);
    let data = await res.json();
    console.log(data.Search);
    displayData(data.Search)
  } catch (error) {
    console.log(error);
  }
};
// getData();

function displayData(data){
    container.innerHTML = "";
    data.forEach((ele)=>{
        let box = document.createElement('div');

        let image = document.createElement('img');
        image.src = ele.Poster

        let title = document.createElement('h2')
        title.textContent = ele.Title;

        box.append(image, title);
        container.append(box)
    })
}
