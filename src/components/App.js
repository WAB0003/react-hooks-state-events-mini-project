import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
//!Create State Variables to pass down to Components
  const [selectedCat, setSelectedCat]=useState(0)
  const [allTasks,setAllTasks]=useState(TASKS)


  const filteredCategory = CATEGORIES[selectedCat]

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCat={selectedCat} setSelectedCat={setSelectedCat}/>
      <NewTaskForm categories={CATEGORIES} allTasks={allTasks} setAllTasks={setAllTasks}/>
      <TaskList allTasks={allTasks} setAllTasks={setAllTasks} selectedCat={selectedCat} filteredCategory={filteredCategory}/>
    </div>
  );
}

export default App;
