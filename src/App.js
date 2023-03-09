import React, {useState, useEffect} from "react";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home";
import Meallist from "./Components/Meallist";
import MealForm from "./Components/MealForm";
import "./1-app.css"





function App () {
  const [name, setname] = useState("")
  const [image, setimage] = useState("")
  const [description, setdescription] = useState("")
  const [meal, setmeal] = useState("")
  
  const [dishes, setDishes] = useState([])

  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect(() => { 
    fetch("http://localhost:3000/meals")
    .then((r)=> r.json())
    .then(setDishes)
    // console.log(setdishes)
    
  },[]);

  function onaddMeals(newDish){
    setDishes([...dishes, newDish])
  }
  //this is so we can add the new input to the array. 

  

  const onToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

    return (
      <div className="container" >
        <NavBar isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />   
        {/* <div className={isDarkMode ? "App" : "App light"}> */}
          
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/meallist" element={<Meallist dishes={dishes}/>} />
            <Route  path="/mealform" element={<MealForm name={name} image={image} description={description} meal={meal} setname={setname} setimage={setimage} setdescription={setdescription} setmeal={setmeal} onaddMeals={onaddMeals} />} />
          </Routes>
      </div>
      // </div>
    )
    }
    
    
  

  export default App;

  //put all the useStates in the App and pass down the info