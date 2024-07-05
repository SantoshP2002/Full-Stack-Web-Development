import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Contact from "./Pages/Contact";
import Navbar from "./component/Navbar";
import ListTodo from "./Pages/ListTodo";
import Common from "./Pages/Common";
import DetailsTodo from "./Pages/DetailsTodo";
import PrivateRoute from "./Pages/PrivateRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* I am A Body */}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<>I am Login</>} />
          <Route path="/ListTodo" element={<ListTodo />} />
          <Route path="/ListTodo/:TodoId" element={<PrivateRoute><DetailsTodo /></PrivateRoute>} />
          <Route path="/Common" element={<Common />} />
          <Route path="/*" element={<>Error</>} /> 
        </Routes>
      </div>
    </>
  );
}

export default App;
