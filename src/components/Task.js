import React from "react";
import "../styles/Task.css";

const Task = ({ task, onDelete, onToggleDone, onRemoveTag }) => {
  return (
    <div className={`task ${task.done ? "done" : ""}`}>
      <div className="task-header">
        <h2>{task.title}</h2>
        <button onClick={() => onToggleDone(task.id)}>Done</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
      <p>{task.description}</p>
      <div className="tags-container">
        {task.tags.map((tag) => (
          <span key={tag.tagId} className="tag" style={{ backgroundColor: tag.color }}>
            {tag.title}
            <button onClick={() => onRemoveTag(task.id, tag.tagId)} className="delete-tag">X</button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Task;
