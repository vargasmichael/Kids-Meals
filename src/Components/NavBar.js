import React from "react";
import { NavLink } from "react-router-dom";
import "./6-nav-bar.css";

const NavBar = () => {
  return (
    <header className="navigation">
      <nav className="nav">
        <NavLink exact="true" to="/" className="button" activeclassname="active">
          <span className="Kidz-Meals"> </span>
          Kidz Meals 
        </NavLink>
        <NavLink exact="true" to="/meallist" className="button" activeclassname="active">
          <span className="meallist"> </span>
          Meal List
        </NavLink>
        <NavLink exact="true" to="/mealform" className="button" activeclassname="active">
          Meal Form
        </NavLink>
      </nav>
    </header>
  );
}

export default NavBar;
