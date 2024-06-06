let container = document.getElementById('container')

    document.getElementById('sortData').addEventListener('change',()=>{

        let sortVal = document.getElementById('sortData');
        console.log(sortVal.value);
        // getData(sortVal.value)  

        getData(`?_sort=title&_order=${sortVal}`)
    })

let api = `https://jsonplaceholder.typicode.com/posts`;

let getData = async (sortVal = "") => {
  try {
    let res = await fetch(`${api}${sortVal}`);
    let data = await res.json();
    console.log(data);
    // console.log(data.Search);
    displayData(data)
  } catch (error) {
    console.log(error);
  }
};
getData();

function displayData(data){
    container.innerHTML = "";
    data.forEach((ele)=>{
        let box = document.createElement('div');

        let id = document.createElement('h1');
        id.textContent  = ele.userId

        let title = document.createElement('h2')
        title.textContent = ele.title;

        let body = document.createElement('p')
        body.textContent = ele.Title;

        let btn = document.createElement('button')
        btn.textContent = 'Delete';
        btn.addEventListener(()=>{
            deleteData(ele.id)
        })

        box.append(id, title, body, btn);
        container.append(box)
    })
} 


async function deleteData(id){

    try {
        let res = await fetch(`${api}/${id}`)
    } catch (error) {
        
    }
}