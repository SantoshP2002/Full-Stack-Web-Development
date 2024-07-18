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

function Navbar({ data, setData }) {
  let a = 9;
  return (
    <div>
      {data} is navBar
      {/* <button onClick={() => setData(a)}>Increase</button> */}
      <input onChange={(e)=>setData(e.target.value)}/>
    </div>
  );
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

// function Card(name, age, classes){
//   return (
//     <div>
//       <p>Name :-{name}</p>
//     </div>
//   )
// }

function App() {
  // const [val, setVal] = React.useState("");
  // const [age, setAge] = React.useState("");
  // const [classes, setClasses] = React.useState("");

  // const [users, setUsers] = React.useState([]);
  const [data, setData] = React.useState("");
  // name: "",
  // age: "",
  // classes: "",
  // isMarried: false,

  // function increaseVal(e) {
  //   setVal(e.target.value);

  //   // setVal(val+1)
  //   // console.log(val+1);
  // }

  // function decreaseVal(){
  //   setVal(val-1)
  //   console.log(val-1);
  // }

  // function submitVal() {
  //   console.log(val);
  //   console.log(age);
  //   console.log(classes);
  //   setVal("");
  //   setAge("");
  //   setClasses("");
  // }
  // const handleChangeInput = (e) => {
  //   // console.log("PrevData", data);
  //   const { name, value, type } = e.target;
  //   setData((prevData) => {
  //     return {
  //       ...prevData, // {name:"Santosh",age:"",classes:""}
  //       [name]: type == "number" ? +value : type == "checkbox" ? true : value,
  //     };
  //   });
  // };
  // const handleSubmit = () => {
  //   console.log("Data", data);
  //   setUsers((prevUsers) => {
  //     return [...prevUsers, data];
  //   });
  // };
  // console.log("Users", users);

  return (
    <div>
      {/* <Navbar  val= {data}/> */}
      <Navbar data={data} setData={setData} />
      {/* {data} */}
      {/* {val} <br />
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      <input
        type="text"
        value={classes}
        onChange={(e) => setClasses(e.target.value)}
      />
      <br /> */}
      {/* <button onClick={submitVal}>increase</button> */}
      {/* <button onClick={decreaseVal}>decrease</button> */}
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      {/* <input
        type="text"
        name="name"
        placeholder="Enter Name"
        onChange={handleChangeInput}
      /> */}
      {/* <input
        type="number"
        name="age"
        placeholder="Enter Age"
        onChange={handleChangeInput}
      />
      <input
        type="checkbox"
        name="isMarried"
        value = {data.isMarried}
        placeholder="Enter Age"
        onChange={handleChangeInput}
      />
      <input
        type="text"
        name="classes"
        placeholder="Enter Classes"
        onChange={handleChangeInput}
      /> */}
      <br />
      {/* <button onClick={handleSubmit}>Submit</button>
      <pre>
        <code>{JSON.stringify(users, null, 2)}</code>
      </pre> */}
      <Footer />
    </div>
  );
}

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App />);
