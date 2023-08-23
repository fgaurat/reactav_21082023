import React, { useEffect, useState } from "react";

function UseEffect() {
  
  const [count, setCount] = useState(0);

    useEffect(()=>{

        setInterval( ()=>{
            console.log("inc")
            setCount(c => c+1)
        },1000)
    },[])

  return (
    <>
      <h2>UseEffect</h2>
      <strong>{count}</strong>
    </>
  );
}

export default UseEffect;
