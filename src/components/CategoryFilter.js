import React, { useState } from "react";

function CategoryFilter({categories, selectedCat, setSelectedCat}) {
  //set if it's selected to the categories index
  

  function handleFilterClick(index){
    setSelectedCat(index);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category,index)=>{
        return (   
          <button 
          // create a ternary for if the index is selected
            className={(index===selectedCat)?"selected":""}
            name={category}
            onClick={()=>handleFilterClick(index)}
            key={category}
          >
            {category}
          </button>)
      })}
    </div>
  );
}

export default CategoryFilter;
