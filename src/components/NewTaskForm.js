import React, { useState } from "react";

function NewTaskForm({categories, allTasks, setAllTasks}) {
  //!create a new array of categories without "All" by removing it
  const formCategories = categories.filter((category)=>category !=="All")
  //*Create State variables to make form elements controlled
  const[formCategory,setFormCategory]=useState("Code")
  const[formDetail,setFormDetail]=useState("")

  //!Create a newFormObject that takes both States from above
  const newFormTask = {
    'id': `${allTasks.length+1}`,
    'text':`${formDetail}`,
    'category':`${formCategory}`
  }

  function handleFormCat(e) {
    setFormCategory(e.target.value)
  }
  
  function handleCatDetail(e) {
    setFormDetail(e.target.value)
  }

  function handleFormSubmit(e) {
    e.preventDefault()

    const newArray = [...allTasks,newFormTask]
    setFormDetail("")
    setFormCategory("Code")
    setAllTasks(newArray)
    
  }

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleCatDetail} value={formDetail}/>
      </label>
      <label>
        Category
        <select name="category" value={formCategory} onChange={handleFormCat}>
          {/* render <option> elements for each category here */}
          {formCategories.map((category)=>{
            return (<option key={category}>{category}</option>)
          })}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
