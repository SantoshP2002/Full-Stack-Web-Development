import { useState } from "react";
import "./App.css";
import {Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Contact from "./Pages/Contact";
import Navbar from "./component/Navbar";
import ListTodo from "./Pages/ListTodo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* I am A Body */}
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/listTodo" element={<ListTodo />} />
          <Route path="/*" element={<>Error</>} /> 
        </Routes>
      </div>
    </>
  );
}

export default App;
