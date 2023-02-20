
/*
import React, { useState } from 'react'

function Toggle() {
  const [toggle, setToggle] = useState(false)

  return(
    <>
      <button onClick={() => setToggle(!toggle)}>click me!</button>
      {toggle && (
        <ul>
          <li>lien1</li>
          <li>lien2</li>
          <li>lien3</li>
          <li>lien4</li>
        </ul>
      )}
    </>
  )
}
export default Toggle;


import React, { useState } from 'react'

function Toggle() {
  const [toggle, setToggle] = useState(false)

  return(
    <>
      <button onClick={() => setToggle(!toggle)}>C'est le but</button>
      {toggle && (
        <ul>
          <li>lien1</li>
          <li>lien2</li>
          <li>lien3</li>
          <li>lien4</li>
        </ul>
      )}
      <button onClick={toggle?'Hide':'Show'}>C'est dans les gradins</button>
    </>
  )
}
export default Toggle;
*/
import React, { useState } from 'react'


function Button() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <button
        onClick={handleClick}
        style={{ backgroundColor: active ? "blue" : "white" }}
      >
        c'est le but
      </button>
      
      <button
        onClick={handleClick}
        style={{ fontSize: active ? "small" : "large" }}>
        c'est dans les gradins
      </button>
    </>
  );
}

export default Button;