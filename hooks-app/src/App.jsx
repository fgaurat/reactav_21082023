import { useState } from "react";
import UseEffect from "./components/UseEffect";
import UseReducer from "./components/UseReducer";
import UseMemo from "./components/UseMemo";
import PureComponent01 from "./components/PureComponent";

function App() {
  const [show, setShow] = useState(false);
  const theValue = "Une valeur"
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
    </>
  );
}

export default App;
