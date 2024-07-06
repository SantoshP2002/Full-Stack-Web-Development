import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

const ListTodo = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('title') || "")
  const [todos, setTodos] = useState([]);

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
    setSearchParams({title:search, page: 2})
    x();
  }, [search]);

  return (
    <div>
      ListTodo Page
      <input type="text" onChange={(e)=>setSearch(e.target.value)}/>
      {todos.map((ele) => (
        <li key={ele.id}>
        <Link to={`/ListTodo/${ele.id}`}>{ele.title}</Link>  
          </li>
      ))}
    </div>
  );
};

export default ListTodo;
