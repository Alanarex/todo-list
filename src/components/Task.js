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
          <div key={tag.tagId} className="tag">
            <span
              style={{
                height: "25px",
                width: "25px",
                backgroundColor: tag.color,
                borderRadius: "50%",
                display: "inline-block",
                marginRight: "5px",
              }}
            ></span>
            <span>{tag.title}</span>
            <button
              onClick={() => onRemoveTag(task, tag)}
              className="delete-tag"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
