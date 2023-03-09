

import React, {useState, useEffect} from 'react';
import "./4-meal-card.css"
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';


function MealCard ({ dishes, handleDeleteClick}) {
  const {id, name, image, description } = dishes;

  
  const [liked, setLiked] = useState(() => {
    const storedValue = localStorage.getItem(name);
    return storedValue === "true";
  });
  useEffect(() => {
    localStorage.setItem(name, liked);
  }, [name, liked]);


const toggleLiked = () => {
  setLiked(!liked);
};


  return (
    <div className="card" >
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      <img className="card-img"  src={image} alt={name} />
      <button className="del-btn" onClick={() => handleDeleteClick(id)}> All Gone</button>
      <button className="like-button" onClick={toggleLiked}> 
       {liked ? <FcLike color='blue' /> : <FcLikePlaceholder color='gray' />}
         {liked ? 'Eaten' : 'Not Eaten'}
       </button>
       
      <div className="card-body">
      </div>
    </div>
 
  );
};

export default MealCard;
