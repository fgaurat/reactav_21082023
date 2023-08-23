import React, { useEffect, useState } from "react";

function UseEffect() {
  
  const [count, setCount] = useState(0);
    
    useEffect(()=>{

        const inter = setInterval( ()=>{
            console.log("inc")
            setCount(c => c+1)
        },1000)

        return ()=>{
            console.log("cleanup")
            clearInterval(inter)
        }
    },[])


    useEffect(()=>{
        console.log("new count",count)
    },[count])

  return (
    <>
      <h2>UseEffect</h2>
      <strong>{count}</strong>
    </>
  );
}

export default UseEffect;
