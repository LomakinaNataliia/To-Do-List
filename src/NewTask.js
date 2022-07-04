import React from "react";
import { useState } from "react";

function NewTask() {
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`New task is: ${task}`);
  };

  return (
    <div>
      <h2>My To Do List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a new task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default NewTask;
