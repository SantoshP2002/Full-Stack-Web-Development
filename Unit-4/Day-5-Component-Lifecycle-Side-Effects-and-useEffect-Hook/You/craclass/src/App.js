import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
import { useState } from "react";

function App() {
  // const [data, setData] = useState(0)
  const [data, setData] = useState(false) 
  return (
    <div className="App">
      <Navbar />
      
      {data}
      {/* <button onClick={()=>setData(data+1)}>+</button>
      <button onClick={()=>setData(data-1)}>-</button> */}
      <button onClick={()=>setData(!data)}>Toggle</button>
      {data?<Footer />: null}
    </div>
  );
}

export default App;
