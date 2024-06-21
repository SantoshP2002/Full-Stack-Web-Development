// Children =>

function Navbar(){
  return <div>Navbar</div>
}

function Footer(){
  return <div>Footer</div>
}
function Layout({children}){
return      <>
      <Navbar/>
        {children}
      <Footer/>

             </>
}
function Home(){
  return <div>Home</div>
}
function Contact(){
  return <div>Contact</div>
}





function App() {

  // List And Keys =>

  // const [val, setVal] = React.useState(""
  //   // {
  //   //   name: "",
  //   //   age: "",
  //   //   married: false
  //   // }
  // );

  // const [val, setVal] = React.useState([]);

  // function formSubmit(e){
  //     e.preventDefault()
  //     console.log(val);
  //     setVal({
  //       name: "",
  //       age: "",
  //       married: false
  //     })
  //  }


// Fetch =>

  // async function formSubmit(e) {


    // const res = await fetch(`https://reqres.in/api/login`, {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },

    //   body:JSON.stringify({
        
    //       "email": "eve.holt@reqres.in",
    //       "password": "cityslicka"
      
    //   })
    // });


    // Axios=> 

    // const res = await axios.post(`https://reqres.in/api/login`,{
    //   "email": "eve.holt@reqres.in",
    //       "password": "cityslicka"
    // })

    // let data = await res.json();
    // console.log(res);
    // setVal(data.products);
  // }

 
  // Rendering List an Array=>

  // let data =["Mango", "Banana", "Berries", "Apple"]

  


  return (
    <div>
      {/* Axios=> */}
      {/* <button onClick={formSubmit}>fetch</button>
      {val.map((ele) => (
        <li key={ele.id}>{ele.title}</li>
      ))} */}

      {/* {val}  */}

      {/* // Array in list :- */}
      {/* { [<div>Hello</div>, <div>Hello2</div>]} */}

      {/* {data.map((ele, index)=> <li>{ele}</li>) */}

      {/* <button onClick={increase}>Increase</button> */}
      {/* <button onClick={() => {}}>Increase</button> */}

      {/* Children=> */}

      <Layout><Home/></Layout>
      <br/>
      <Layout><Contact/></Layout>
    </div>
  );
}

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App />);
