

  import React, { useState } from "react"
import MealCard from "./MealCard"
import "./3-meal-list.css"

function Meallist({dishes}) {
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
    return <MealCard key={dish.id} dishes={dish}/>
  });

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }


  return (
    <div className="meal-list">
      <div className="meal-list-card">
      <h1>Check Out These Meals!</h1>
      <label htmlFor="category">Filter by category:</label>
      <select id="category" onChange={handleOptionChange} value={selectedOption}>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <div className='card-container'> 

      {dishesArray}
      </div>
    </div>
    </div>
  )
}

export default Meallist;


