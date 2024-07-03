import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Navbar } from "./Navbar";
import Footer from "./Footer";
import CustomButton from "./CustomButton";


function App() {
  // const [count, setCount] = useState(0);
  // let data = useRef();
  
  // useEffect(()=>{
  //   data.current.focus()
  // })
 
  return (
    <>
      <div>
      <CustomButton onClick={()=>alert(1)} label={"I am Custom"} style={{backgroundColor: "green"}}/>
      <CustomButton onClick={()=>alert(2)} label={"I am Custom2"} style={{backgroundColor: "red"}}/>

      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
        <Navbar/>
        {/* <input type="text" ref={data}/> */}
        {/* {data.current} */}
        {/* <button onClick={()=>{
          // data.current = data.current+1
          // console.log(data); 

          data.current.focus(); 
        }}>Click</button>   */}

        {/* <button onClick={()=>setCount(count+1)}>count</button> */}
        {/* {count} */}
        <Footer/>
      </div>
    </>
  );
}

export default App;
