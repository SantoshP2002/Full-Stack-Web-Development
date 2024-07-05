import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailsTodo = () => {
  const [todo, setTodo] = useState({});
  const { TodoId } = useParams();

  useEffect(()=>{
    fetch(`http://localhost:8000/todos/${TodoId}`)
    .then(e=>e.json())
    .then(e=>setTodo(e))
  },[TodoId])
  return <div>DetailsTodo

    Title: {todo?.title}<br/>
    Description : {todo?.Description}<br/>
    completed  : {todo?.status}<br/>
  </div>;
};

export default DetailsTodo;
