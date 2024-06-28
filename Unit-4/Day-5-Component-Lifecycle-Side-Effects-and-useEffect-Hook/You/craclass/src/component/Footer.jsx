import React, { useEffect, useState } from "react";

const Footer = () => {
  // const [data, setData] = useState(1);
  const [data, setData] = useState(1000);
  const [page, setPage] = useState(1);
  useEffect(() => {
    // const data = setInterval(() => console.log(Date()), 1000);
    // setData(data+1)
    // const data = fetch(`https://jsonplaceholder.typicode.com/posts/${page}`)
    // .then(e=>e.json())
    // .then(e=>setData(e));

    const temp = setInterval(() => {
      setData(data => data - 1);
    }, 1000);

    return ()=>{
      clearInterval(temp)
    }


  }, [data]);
  console.log("Outside");



  return (
    <div>
      Footer
      {/* {data} */}
      {/* {data.map((e)=><>{e.title}</>)} */}
      {/* <button onClick={() => setData(data + 2)}>+</button> */}
      title : {data} <br />
      <button onClick={() => setPage(page + 1)}>Increase</button>
    </div>
  );
};

export default Footer;
