import React,{useState} from "react";
import Task from "./Task"


function TaskList({filteredCategory,allTasks,setAllTasks}) {
  


  function deleteTask(delTask) {
    const updatedTasksArray = allTasks.filter((task)=>task !== delTask)
        // if (task===delTask){
        //   return null;
        // }else{
        //   return task
        // }
      setAllTasks(updatedTasksArray)
  }

const filteredTaskArray = allTasks.filter((task)=>{
  if (filteredCategory==="All"){
    return task;
  }else{
    return task.category === filteredCategory
  }
})

//! Returns 
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {filteredTaskArray.map((task,index)=>(
        < Task key={index} task={task} deleteTask={deleteTask}/>
      ))}
    </div>
  );
}

export default TaskList;
