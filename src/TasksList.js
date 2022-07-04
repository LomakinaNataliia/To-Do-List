import React from "react";

function TasksList(props) {
  return (
    <div>
      <header>
        <p>{props.toDoItem}</p>
      </header>
    </div>
  );
}

export default TasksList;
