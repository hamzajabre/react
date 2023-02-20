/*
import React from 'react';

function Timer() {
    const date = new Date();
    const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();
  
    return (
        <div className="App">
            <h1 ></h1>
            <h2 > {showTime}</h2>
        </div>
    );
}
  
export default Timer;

*/
import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h3>Heure actuelle : {time.toLocaleTimeString()}</h3>
    </div>
  );
}

export default Timer;