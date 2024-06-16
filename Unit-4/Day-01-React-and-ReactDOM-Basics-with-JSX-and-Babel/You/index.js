// let root = document.getElementById("root");

// let create = document.createElement("div")
// create.textContent = "Hello"
// console.log(create);>
// root.append(create)

// React =>

// const element = React.createElement("div",{className : "container"},
//                 React.createElement("h1",{className: "box1"}, "Hello"),
//                 React.createElement("h2", {className: "box2"}, "Hello1"))





// InterPolation =>

// let data = true;
// const element = <div className="container" style={{color:data? "red": "green"}}>
//                 /* <p className="box1">{data?"santosh": "shrutika"}</p>
//                 <p className="box2">pawar</p> */
//                 </div>;

// const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
// reactRoot.render(element);




// Event =>

function alertBox(a) {
  console.log("hello" + a);
}

let data = true;
const element = (<div className="container" style={{ color: data ? "red" : "green" }}>
    {data ? 
    ( <button onClick={() => alertBox("santosh")}>Login</button> ) :
     ( <button>Logout</button> )}
  </div>
);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(element);
