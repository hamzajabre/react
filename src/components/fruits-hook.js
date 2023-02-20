import React, { useState } from "react";

function Fruits(){
    const[fruits,setFruits]=useState(['pomme','orange','banane']);
    const [fruitName, setFruitName] = useState("");
    const addFruit = (e) => {
        e.preventDefault()
        setFruits([...fruits, fruitName]); 
       
      }
    return(
        <>
            <h5>Qu'est-ce que j'ai dans mon panier:</h5>
            {fruits.map(fruit=>(
                <h5>j'ai un(e) {fruit}</h5>
            
            )
            )}
            <input type='text' placeholder='ex:fraise'value={fruitName} onChange={e=>
            setFruitName(e.target.value)}></input>
            <button onClick={addFruit}>ajouter</button>
        </>
    )
}

export default Fruits;