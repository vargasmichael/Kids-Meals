import React from "react"
import { NavLink } from "react-router-dom"



  const NavBar = ({ isDarkMode, onToggleDarkMode }) => {
 const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";
  return (
    <header className="navigation">
      <h1 className="branding" >
      <NavLink to="/" >
        <span className="logo"> 🍕 </span>
        Kidz Meals 
      </NavLink>
      </h1>
     <nav>
      <NavLink  exact to=  "/meallist" className="button">
        <span className="meallist"> </span>
        Meal List
      </NavLink>
      <NavLink  exact to="/mealform" className="button">
         MealForm
      </NavLink>
      <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
    </nav>
  </header>
  );
}

export default NavBar;

//add <Link> to each page to prevent refreshing when clicked