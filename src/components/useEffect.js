/*
import React, {useEffect, useState} from "react";

export default function Color() {
    const [color, setColor] = useState('green');
    useEffect(() => {
      document.body.style.backgroundColor = color;
    }, [color]);
    return(
        <div>
        <input
          type="text"
          value={color}
          onChange={(ev) => setColor(ev.target.value)}
        />
      </div>
    )
   
    
  }
*/

import React, { useState, useEffect } from 'react';

function Color() {
  const [Color, setColor] = useState('');

  useEffect(() => {
    document.body.style.backgroundColor = Color;
  }, [Color]);

  const handleChange = (event) => {
    setColor(event.target.value);
  }
  

  return (
    <div>
      <label >Background color:</label>
      <input id="color-input" type="color"value={Color} onChange={handleChange} />
    </div>
  );
}

export default Color;




