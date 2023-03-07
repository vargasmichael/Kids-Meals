import React from "react"
import MealCard from "./MealCard"



function Meals({dishes}) {
  const dishesArray = dishes.map((dish) => {
    console.log(dishesArray)
    return <MealCard key={dish.id} dish={dish}/>
  })
   return (
      <div>
        <h1>Check Out These Meals!</h1>
        {dishesArray}
      </div>
    
  
  )}
  export default Meals;