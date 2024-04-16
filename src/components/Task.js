import React from "react";
import "../styles/Task.css";

const Task = ({ task, onDelete, onToggleDone }) => {
  return (
    <div className={`task ${task.done ? "done" : ""}`}>
      <div className="task-header">
        <h2>{task.title}</h2>
        <button onClick={() => onToggleDone(task.id)}>Done</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
      <p>{task.description}</p>
      <div className="tags-container">
        {task.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Task;
