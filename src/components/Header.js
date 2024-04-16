import React, { useState } from "react";
import "../styles/Header.css";
import TaskInput from "./TaskInput";

const Header = ({ onAddTask, tags }) => {
  const [showInput, setShowInput] = useState(false);

  return (
    <div className="header">
      <h1>ToDo List</h1>
      <button onClick={() => setShowInput(!showInput)}>+</button>
      {showInput && <TaskInput onAddTask={onAddTask} tags={tags} />}
    </div>
  );
};

export default Header;
