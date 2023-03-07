// import React from "react"

// const Home = () => {
//     return (
//       <div>
//         <h1>Kidz Meals</h1>
//         <h2>Heres are the meals you can feed your kids today!</h2>

//       </div>
//     )
//   }

//   export default Home;


import React, { useState } from "react"

const Home = () => {
  const [selectedMeal, setSelectedMeal] = useState(""); // initialize selected meal to empty string

  const handleSelectChange = (event) => {
    setSelectedMeal(event.target.value); // update selected meal when dropdown value changes
  }

  return (
    <div>
      <h1>Kidz Meals</h1>
      <h2>Here are the meals you can feed your kids today!</h2>
      <label htmlFor="meallist">Choose a meal:</label>
      <select id="meallist" value={selectedMeal} onChange={handleSelectChange}>
        <option value="">--Select a Meal--</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Snack">Snack</option>
        <option value="Dinner">Dinner</option>
      </select>
      <p>Here are you meals for: {selectedMeal}</p>
    </div>
  )
}

export default Home;
