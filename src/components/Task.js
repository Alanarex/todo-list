import React from "react";
import "../styles/Task.css";
import Tag from "./Tag";

const Task = ({ task, onDelete, onToggleDone, onRemoveTag }) => {
  return (
    <div className={`task ${task.done ? "done" : ""}`}>
      <div className="task-header">
        <h2>{task.title}</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <label>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => onToggleDone(task.id)}
              style={{ marginRight: "5px" }}
            />
            Done
          </label>
          <button onClick={() => onDelete(task.id)} className="delete-button">
            <i className="fa fa-trash" aria-hidden="true"></i>{" "}
            {/* Using FontAwesome icon */}
          </button>
        </div>
      </div>
      <p>{task.description}</p>
      <div className="tags-container">
        {task.tags.map((tag) => (
          <Tag key={tag.id} tag={tag} task={task} onRemoveTag={onRemoveTag} />
        ))}
      </div>
    </div>
  );
};

export default Task;
