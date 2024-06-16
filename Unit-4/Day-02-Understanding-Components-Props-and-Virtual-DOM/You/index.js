

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





function Navbar(){
  return(
  <div>
    I am  Navbar
  </div>
  )
}


function Footer(){
  return(
  <div>
    I am Footer
  </div>
  )
}

function App(){
  return (
    <div>
    <Navbar/>
I am A Body

      <Footer/>
  </div>
  )
}




const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App/>);
