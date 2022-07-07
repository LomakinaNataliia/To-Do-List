import React from "react";

function TasksList({ allTasks }) {
  return allTasks.map((task) => <p>{task}</p>);
}

export default TasksList;
