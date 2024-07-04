import React, { useEffect, useState } from "react";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/todos`);
      const responseData = await response.json();

      console.log(responseData);
      
      setTodos(responseData);
    } catch (error) {
      console.log(error)
    }
  };
  
  useEffect(()=>{
    fetchData();
  },[])
  
  // console.log("Todos", todos);
  return <div>ListTodo</div>;
};

export default ListTodo;
