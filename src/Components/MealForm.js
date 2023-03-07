import React, { useState } from "react"

function MealForm() {
  const [name, setname] = useState("")
  const [image, setimage] = useState("")
  const [description, setdescription] = useState("")
  const [meal, setmeal] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    const newMeal ={
      name: name,
      image: image,
      description: description,
      meal:meal,
    }

    setmeal(newMeal)
    setname("")
    setimage("")
    setdescription("")
    setmeal("")
  }

  
    return (
      <div className="form">
        <h2>New Meal</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Meal Name" value={name} onChange={(e)=>setname(e.target.value)}/>
          <input type="text" name="image" placeholder="Image" value={image} onChange={(e)=>setimage(e.target.value)}/>
          <input type="text" name="description" placeholder="Meal Description" value={description} onChange={(e)=>setdescription(e.target.value)}/>
          <input type="text" name="meal" placeholder="Meal Name" value={meal} onChange={(e)=>setmeal(e.target.value)}/>
          <button type="submit">Add Meal</button>
        </form>
      </div>
    )
  }

  export default MealForm;

  //add a form that can be manipulated