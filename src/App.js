import React, {useState, useEffect} from "react";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home";
import Meallist from "./Components/Meallist";
import MealForm from "./Components/MealForm";




function App () {
  const [name, setname] = useState("")
  const [image, setimage] = useState("")
  const [description, setdescription] = useState("")
  const [meal, setmeal] = useState("")
  
  const [dishes, setdishes] = useState([])

  const [isDarkMode, setIsDarkMode] = useState(true);


  useEffect(() => { 
    fetch("http://localhost:3000/meals")
    .then((r)=> r.json())
    .then(setdishes)
    // console.log(setdishes)
    
  },[]);

  // function setmeal(){
  //   fetch("http://localhost:6001/plants",
  //     {
  //       method:"POST",
  //       headers:
  //       {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(plantobj)
  //     }
  //   )
  //   .then(r=>r.json())
  //   .then(newplant => {
  //     const newplantsarr=[...plants,newplant]
  //     setplants(newplantsarr)
  //   })
  // }


  const onToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

    return (
        <div className={isDarkMode ? "App" : "App light"}>
        <NavBar isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />   
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/meallist" element={<Meallist dishes={dishes}/>} />
            <Route  path="/mealform" element={<MealForm name={name} image={image} description={description} meal={meal} setname={setname} setimage={setimage} setdescription={setdescription} setmeal={setmeal} />} />
          </Routes>
      </div>

    )
  }

  export default App;

  //put all the useStates in the App and pass down the info