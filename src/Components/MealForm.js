import React, { useState } from "react"
import "./5-meal-form.css"

function MealForm({onaddMeals}) {
  const [name, setname] = useState("")
  const [image, setimage] = useState("")
  const [description, setdescription] = useState("")
  const [category, setcategory] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    const newMeal ={
      name: name,
      image: image,
      description: description,
      category:category,
    }

    setcategory(newMeal)
    setname("")
    setimage("")
    setdescription("")
    setcategory("")


    fetch("http://localhost:3000/meals", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMeal),
      })
        .then((response) => response.json())
        .then(recentlyCreatedDish => onaddMeals(recentlyCreatedDish)) 
          
        }
        

      
  
        return (
          <div className="meal-form">
          <div className="card-form">
            <h2>New Meal</h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Meal Name</label>
              <input type="text" name="name" placeholder="Meal Name" value={name} onChange={(e)=>setname(e.target.value)}style={{ marginBottom: "10px", padding: "10px", borderRadius: "5px", border: "1px solid gray" }}/>
              <label htmlFor="image">Image</label>
              <input type="text" name="image" placeholder="Image" value={image} onChange={(e)=>setimage(e.target.value)}style={{ marginBottom: "10px", padding: "10px", borderRadius: "5px", border: "1px solid gray" }}/>
              <label htmlFor="description">Meal Description</label>
              <input type="text" name="description" placeholder="Meal Description" value={description} onChange={(e)=>setdescription(e.target.value)}style={{ marginBottom: "10px", padding: "10px", borderRadius: "5px", border: "1px solid gray" }}/>
              <label htmlFor="meallist">Category</label>
              <select id="meallist" value={category} onChange={(e)=>setcategory(e.target.value)}style={{ marginBottom: "10px", padding: "10px", borderRadius: "5px", border: "1px solid gray" }}>
                <option value="">--Select a Category--</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Snack">Snack</option>
                <option value="Dinner">Dinner</option>
              </select>
              <button style={{ color: "blue"}} type="submit"  >Add Meal</button>
            </form>
          </div>
          </div>
        )
        

}
  

  
  //   return (
  //     <div className="form">
  //       <h2>New Meal</h2>
  //       <form onSubmit={handleSubmit}>
  //         <input type="text" name="name" placeholder="Meal Name" value={name} onChange={(e)=>setname(e.target.value)}/>
  //         <input type="text" name="image" placeholder="Image" value={image} onChange={(e)=>setimage(e.target.value)}/>
  //         <input type="text" name="description" placeholder="Meal Description" value={description} onChange={(e)=>setdescription(e.target.value)}/>
  //         <input type="text" name="category" placeholder="Category" value={category} onChange={(e)=>setcategory(e.target.value)}/>
  //         <button style={{ color: "blue"}} type="submit"  >Add Meal</button>
  //       </form>
  //     </div>
  //   )
  // }

  export default MealForm;

  //add a form that can be manipulated


