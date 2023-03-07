import React, {useState, useEffect} from "react";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home";
import Meals from "./Components/Meallist";
import MealForm from "./Components/MealForm";




function App() {
  const [name, setname] = useState("")
  const [image, setimage] = useState("")
  const [description, setdescription] = useState("")
  const [meal, setmeal] = useState("")
  
  const [dishes, setdishes] = useState([])

  


  useEffect(() => { 
    fetch("http://localhost:3000/meals")
    .then(r => r.json())
    .then(meals => setdishes(meals))
  },[])

    return (
      <div>
          <NavBar />
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/meals" element={<Meals dishes={dishes}/>} />
            <Route  path="/mealform" element={<MealForm name={name} image={image} description={description} meal={meal} setname={setname} setimage={setimage} setdescription={setdescription} setmeal={setmeal} />} />
          </Routes>
      </div>

    )
  }

  export default App;

  //put all the useStates in the App and pass down the info