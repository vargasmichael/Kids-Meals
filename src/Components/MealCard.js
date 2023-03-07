// import React from "react"




// const MealCard = ({dish}) => {
//   const { name, image, description } = dish
//   return (
//     <div>
//       <li className="card">
//         <img src={image} alt={name} />
//         <h4>{name}</h4>
//         <h4>{dish}</h4>
//         <p>{description}</p>

//         <h1>The meal card goes here!</h1>
//       </li>
  
    
//       <ul className="cards"></ul>
        
//     </div>    
    
//     )}
  

//   export default MealCard

import React from 'react';

function MealCard ({ dishes }) {
  //console.log(MealCard)
  const { name, image, description } = dishes;
  return (
    <div className="card" style={{  }}>
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      <img className="card-img"  src={image} alt={name} />
      <div className="card-body">
      </div>
      {/* inline styling */}
    </div>
  );
};

export default MealCard;
