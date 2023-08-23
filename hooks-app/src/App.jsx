import { useCallback, useMemo, useRef, useState } from "react";
import UseEffect from "./components/UseEffect";
import UseReducer from "./components/UseReducer";
import UseMemo from "./components/UseMemo";
import {PureComponent01, PureComponent02} from "./components/PureComponent";
import UseRef from "./components/UseRef";
import UseCustomHook from "./components/UseCustomHook";

function App() {
  const [show, setShow] = useState(false);
  const theValue = "Une valeur"

  const inputRef = useRef(null)
  const compRef = useRef(null)

  // const onClickPureComponent02  = ()=>{
  //   console.log("onClickPureComponent02")
  // }
  
  // const onClickPureComponent02  = useMemo(()=>{
  //   return ()=>{
  //     console.log("onClickPureComponent02")
  //   }
  // },[])
  
  const onClickPureComponent02  = useCallback(()=>{
      console.log("onClickPureComponent02")
  },[])

  const clickRef  = ()=>{
    console.log(inputRef.current.value)
  }
  const clickCompRef  = ()=>{
    console.log(compRef.current.theValue())
  }
  const clickSetFocusCompRef  = ()=>{
    compRef.current.setFocus()
  }
  return (
    <>
      <h1>TP Hooks</h1>

      <button onClick={() => setShow((s) => !s)}>
        {show ? "Hide" : "Show"} useState
      </button>
      
      {show && (
        <>
          <h2>useState</h2>

          <hr />
          <h2>UseEffect Component</h2>
          <UseEffect/>
          <hr />

        </>
      )}
      <hr />
      <UseReducer/>
      <hr />
      <UseMemo/>
      <hr />
      <PureComponent01 value={theValue}/>
      <hr />
      <PureComponent02 onClick={onClickPureComponent02}/>
      <hr />
      <h2>useRef</h2>
      <input type="text" defaultValue="Une valeur" ref={inputRef}/> <br/>
      <button onClick={()=>clickRef()}>click</button>
      <UseRef ref={compRef}/>
      <button onClick={()=>clickCompRef()}>click</button>
      <button onClick={()=>clickSetFocusCompRef()}>set focus</button>
      <hr />
      <UseCustomHook/>
    </>
  );
}

export default App;
