// function alertBox(a) {
//   console.log("hello" + a);
// }

// function Navbar(){

//  return (
//  <div>
//            I am a Navbar
//         </div>)
// }

// function Footer(){

//   return (
//   <div>
//     I am Footer
//   </div>)
// }

// function App() {
//       // let data = true;
//        return <div>
//               <Navbar/>
//              I am  a body
//               <Footer/>
// </div>

// }

function Navbar() {
  return <div>I am Navbar</div>;
}

function Footer() {
  return <div>I am Footer</div>;
}

function Card({name,age,classes}){

  return (
    <div>
      <p>Name:-{name}</p>
      <p>Age:-{age}</p>
      <p>Class:-{classes} </p>

     </div>
  )
}

function App() {
  const [state, setState] = React.useState(0);
  function handelClick() {
    setState(state + 4);
  }

  return (
    <div>
      <Navbar />
      <button onClick={handelClick}>Show User</button>
      <p>{state}</p>
      I am A Body
      <Footer />
    </div>
  );
}

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App />);
