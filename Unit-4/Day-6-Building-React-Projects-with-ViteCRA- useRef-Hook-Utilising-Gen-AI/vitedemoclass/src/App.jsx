import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Navbar } from "./Navbar";
import Footer from "./Footer";


function App() {
  const [count, setCount] = useState(0);
  let data = useRef();
  
  useEffect(()=>{
    data.current.focus()
  })
 
  return (
    <>
      <div>
     
        <Navbar/>
        <input type="text" ref={data}/>
        {/* {data.current} */}
        <button onClick={()=>{
          // data.current = data.current+1
          // console.log(data); 

          data.current.focus(); 
        }}>Click</button>  

        <button onClick={()=>setCount(count+1)}>count</button>
        {count}
        <Footer/>
      </div>
    </>
  );
}

export default App;
