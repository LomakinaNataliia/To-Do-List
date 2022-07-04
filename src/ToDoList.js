import React from "react";
import NewTask from "./NewTask";
import TasksList from "./TasksList";

function ToDoList() {
  return (
    <div>
      <NewTask />
      <TasksList />
    </div>
  );
}

export default ToDoList;
