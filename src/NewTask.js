import React from "react";
import { useState } from "react";

function NewTask(props) {
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.saveToArray(task);
    //clear input value
    setTask("");
  };

  return (
    <div>
      <h2>My To Do List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          placeholder="Type a new task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default NewTask;
