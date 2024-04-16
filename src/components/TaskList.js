import React from "react";
import "../styles/TaskList.css";
import Task from "./Task";

const TaskList = ({ tasks, onDelete, onToggleDone }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggleDone={onToggleDone}
        />
      ))}
    </div>
  );
};

export default TaskList;
