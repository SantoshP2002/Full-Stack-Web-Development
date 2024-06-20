

function App(){

    const [val, setVal] = React.useState(0)

    // function increase(){
    //     setVal(a=>a+1)
    //     setVal(val+1)
    //     setVal(a=>a+1)
    //     // setVal(val+1)
    //     // setVal(val+1)
    //     // setVal(val+2)
    //     console.log(val);
        
    // }
 
    let data =["Mango", "Banana", "Berries", "Apple"]
  
    return (
        <div>
            {val} 
            {/* // Array in list :- */}
           {/* { [<div>Hello</div>, <div>Hello2</div>]} */}
           <br/>
           <br/>
           <br/>

            {data.map((ele, index)=> <li>{ele}</li>)
            }

            <br/>
            <br/>
            <br/>



            {/* <button onClick={increase}>Increase</button> */}
            <button onClick={()=>{}}>Increase</button>
        </div>
    )
}

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App/>)