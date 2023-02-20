
import React, { useState } from "react";

export default function CompteurHook() {
  const [count, setCount] = useState(0); 
  function increment() {
    setLastAction('+')
    setCount(function (Count) {
        if(Count>=5) {
            return alert("limite atteinte"); 
        }
      return (Count += 1);
    });
  }
  const[lastAction,setLastAction]=useState('');
  function decrement() {
    setLastAction('-')
    setCount(function (Count) {
      if (Count > 0 ) {
        return (Count -= 1);}
     
    else {
        return (Count = 0);
      }
    });
  }

  return (
    <div className="count">
      <h1>{count}</h1>
      <button className='plus'onClick={increment}>+</button>
      <button className='moins'onClick={decrement}>-</button>
      <h5>last button clicked:</h5>
      <h5>{lastAction}</h5>

    </div>
  );
}




 