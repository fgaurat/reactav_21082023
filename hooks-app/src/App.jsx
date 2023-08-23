import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <h1>TP Hooks</h1>

      <button onClick={() => setShow((s) => !s)}>
        {show ? "Hide" : "Show"} useState
      </button>
      
      {show && (
        <>
          <h2>useState</h2>
          
        </>
      )}
    </>
  );
}

export default App;
