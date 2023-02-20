

import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0); 
  function increment() {
    setCount(function (Count) {
        if(Count>=5) {
            return alert("limite atteinte");
           
        }
      return (Count += 1);
    });
  }
  function decrement() {
    setCount(function (Count) {
      if (Count > 0 ) {
        return (Count -= 1);}
     
    else {
        return (Count = 0);
      }
    });
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}
