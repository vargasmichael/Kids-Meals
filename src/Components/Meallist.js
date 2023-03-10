

  import React, { useState } from "react"
import MealCard from "./MealCard"
import "./3-meal-list.css"



function Meallist({dishes, setDishes}) {

  function handleDeleteClick(id) {
    fetch(`http://localhost:3000/meals/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        console.log(dishes);
      });
      //d=add functionality to filter our dishes based on the id, returning only the dishes
      const updatedDishes = dishes.filter((oneDish) => oneDish.id !== id)
      setDishes(updatedDishes)
  }

  const [selectedOption, setSelectedOption] = useState("All");

  const options = ["All", "Breakfast", "Snack", "Lunch", "Dinner"];

  const filteredDishes = dishes.filter((dish) => {
    if (selectedOption === "All") {
      return dish
    }else{
      return dish.category === selectedOption;
    }

  });
  //console.log(filteredDishes)

  const dishesArray = filteredDishes.map((dish) => {
    //console.log(dishes)
    return <MealCard key={dish.id} dishes={dish} handleDeleteClick={handleDeleteClick} />
  });

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }


  

  return (
    <div className="meal-list">
      <div className="meal-list-card">
      <h1></h1>
      <label htmlFor="category" >Filter by category:</label>
      <select id="category" onChange={handleOptionChange} value={selectedOption}>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
       </div>
      {dishesArray}
    </div>
   
    
  )
}

export default Meallist;


