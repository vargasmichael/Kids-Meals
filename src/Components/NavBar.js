import React from "react"
import { NavLink } from "react-router-dom"
import "./6-nav-bar.css"




const NavBar = () => {
  
  return (
    <header className="navigation">
      
      <nav className="nav">
      <NavLink exacxt to="/" className="button" activeClassName="">
       <span className="Kidz-Meals"> </span>
          Kidz Meals 
           </NavLink>
          <NavLink exact to="/meallist" className="button" activeClassName="">
          <span className="meallist"> </span>
          Meal List
        </NavLink>
        <NavLink exact to="/mealform" className="button" activeClassName="">
          Meal Form
        </NavLink>
        
      </nav>
    </header>
  );
}





//   const NavBar = ({ isDarkMode, onToggleDarkMode }) => {
//  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";
//   return (
//     <header className="navigation">
//       <h1 className="branding" >
//       <NavLink to="/" >
//         <span className="logo"> 🍕 </span>
//         Kidz Meals 
//       </NavLink>
//       </h1>
//      <nav>
//       <NavLink  exact to=  "/meallist" className="button">
//         <span className="meallist"> </span>
//         Meal List
//       </NavLink>
//       <NavLink  exact to="/mealform" className="button">
//          MealForm
//       </NavLink>
//       <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
//     </nav>
//   </header>
//   );
// }

export default NavBar;

//add <Link> to each page to prevent refreshing when clicked