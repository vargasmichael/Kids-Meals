import React from "react"




function MealCard({dish}) {
  const { name, image, description } = dish
  return (
    <div>
      <li className="card">
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <h4>{dish}</h4>
        <p>{description}</p>

        <h1>The meal card goes here!</h1>
      </li>
  
    
      <ul className="cards"></ul>
        
    </div>    
    
    )}
  

  export default MealCard