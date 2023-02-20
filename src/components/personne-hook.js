import React, { useState } from "react";
function PersonneHook(){
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
  
    
    return(
        <>
                <input type='text' placeholder='name'value ={name} onChange={e=>
                    setName(e.target.value)}/>
               <input type='text' placeholder='age'value ={age} onChange={e=>
                    setAge(e.target.value)}/>
                     <h1>{name} a {age } ans</h1>
               </> 
    )
}




export default PersonneHook;