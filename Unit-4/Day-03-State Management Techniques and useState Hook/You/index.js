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

// function Card({ name, age, classes }) {
//   return (
//     <div>
//       <p>Name:-{name}</p>
//       <p>Age:-{age}</p>
//       <p>Class:-{classes} </p>
//     </div>
//   );
// }

function App() {
  const [val, setVal] = React.useState("");
  const [classes, setClasses] = React.useState("");
  const [age, setAge] = React.useState("");
  function increaseVal(e) {
    setVal(e.target.value);

    // setVal(val+1)
    // console.log(val+1);
  }

  // function decreaseVal(){
  //   setVal(val-1)
  //   console.log(val-1);
  // }

  function submitVal() {
    console.log(val);
    console.log(age);
    console.log(classes);
    setVal(""); 
  }

  return (
    <div>
      <Navbar />
      {val} <br />
      <input type="text" value={val} onChange={(e) =>setVal(e.target.value)} />
      <input type="text" value={age} onChange={(e) =>setAge(e.target.value)} />
      <input type="text" value={classes} onChange={(e) =>setClasses(e.target.value)} />
      <br />
      <button onClick={submitVal}>increase</button>
      {/* <button onClick={decreaseVal}>decrease</button> */}
      <Footer />
    </div>
  );
}

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App />);
