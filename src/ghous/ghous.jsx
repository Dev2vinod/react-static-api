import React, { useState } from "react";
import "../ghous/ghous.css";

// const [num, setNum] = useState(0);
function Butn() {
  const value = "vinod";

  const foo = () => {
    for (let i = 0; i <= 19; i++) {
      console.log(Math.round(Math.random() * 10), i);
      // console.log(i);
    }
  };

  return (
    <div>
      <button value={value} onClick={foo} className="btn">
        hello
      </button>
      <button>i am button</button>
      <ul>
        <li>{foo}</li>
      </ul>
    </div>
  );
}

export default Butn;
