import React from "react";
import CompA from "./CompA";
import CompB from "./CompB";

function App() {
  return (
    <>
       <div className='header'> <h1 >TODOLIST</h1> </div>

      <div style={{ border: "solid red",background:"#a29bfe" }}>
        <CompA />
      </div>

      <div style={{ border: "solid green ",background:"#fbc531" }}>
        <CompB />
      </div>
    </>
  );
}

export default App;
