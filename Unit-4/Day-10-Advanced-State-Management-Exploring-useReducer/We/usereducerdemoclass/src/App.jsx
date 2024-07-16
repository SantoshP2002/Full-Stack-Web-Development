import { useEffect, useReducer, useState } from "react";
import "./App.css";

// {type:"", paylode:""}
// function countReducer(state, action){

//    switch(action.type){
//     case "ADD" : return state+ action.paylode ;
//     case "SUB" : return state-action.paylode;
//     default :throw error ("Action not Found")
//    }
// }

// function formReducer(state, action){

//   switch(action.type){
//     case "NAME" : return  {...state, name: action.paylode}
//     case "AGE": return {...state, age: action.paylode}
//     case "CITY": return {...state,address:{...state.address, city: action.paylode}}
//     case "PINCODE": return {...state, address:{...state.address, pincode:action.paylode}}
//       default : throw Error ("Invalid")
//   }
// }

function fetchReducer(state, action) {
  switch (action.type) {
    case "LODING":
      return { ...state, isLoding: true };
    case "ERROR":
      return { ...state, isLoding: false, isError: true };
    case "SUCCESS":
      return { isLoding: false, isError: false, data: action.paylode };

      default : return Error("Invalid")
  }
}

function App() {
  // const [data, setData] = useState(0)
  //  const [count, dispatch] = useReducer(countReducer, 0);
  //  const [formData, formDispatch] = useReducer(formReducer, {name:"", age:"", address:{city:"", pincode:""}});
  //  console.log(0);

  const [data, dispatch] = useReducer(fetchReducer, {
    isLoding: false,
    isError: false,
    data: [],
  });


  // SELF CODE :=>
  // const x = async function () {
  //   try {

  //     let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  //     let data = await res.json();
  //     console.log(data);

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    dispatch({ type: "LODING" });
      fetch(import.meta.env.VITE_API_URL)
      .then(e=>e.json())
      .then(e=>dispatch({type:"SUCCESS", paylode:e}))
      .catch(e=>dispatch({type: "ERROR"}))
  },[]);
  return (
    <>
      {/* {count}
     <br/>
     <input type='number' onChange={(e)=>setData(+e.target.value)}/>
     <button onClick={()=>dispatch({type:"ADD", paylode:data})}>Inc</button>
     <button onClick={()=>dispatch({type:"SUB", paylode:data })}>Dec</button>
     <br/>
     <br/>
     <br/> */}

      {/* <>
     <form>
        Name : <input onChange={(e)=>formDispatch({type:"NAME", paylode: e.target.value})}/> <br/>
        age : <input onChange={(e)=>formDispatch({type:"AGE", paylode: e.target.value})}/> <br/>
        city : <input onChange={(e)=>formDispatch({type:"CITY", paylode: e.target.value})}/> <br/>
        pincode : <input onChange={(e)=>formDispatch({type:"PINCODE", paylode: e.target.value})}/> <br/>
        {JSON.stringify(formData)}
     </form>
     </> */}

      {data.isLoding && !data.isError && <h1>Loding....</h1>}
      {!data.isLoding && data.isError && <h1>Error in server</h1>}
      {!data.isLoding &&
        !data.isError &&
        data.data.map((ele) => <li key={ele.id}>{ele.title}</li>)}
    </>
  );
}

export default App;
