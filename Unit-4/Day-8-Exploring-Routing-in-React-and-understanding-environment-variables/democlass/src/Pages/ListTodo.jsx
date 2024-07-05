import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("")

  const x = async function () {
    try {
      let res = await fetch(`http://localhost:8000/todos?title=${search}`);
      let data = await res.json();
      console.log(data);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    x();
  }, []);

  return (
    <div>
      ListTodo Page
      <input type="text" onChange={(e)=>}/>
      {todos.map((ele) => (
        <li key={ele.id}>
        <Link to={`/ListTodo/${ele.id}`}>{ele.title}</Link>  
          </li>
      ))}
    </div>
  );
};

export default ListTodo;
