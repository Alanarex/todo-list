import React, { useState, useEffect } from "react";
import Header from "./Header";
import TaskList from "./TaskList";
import Sidebar from "./Sidebar";
import "../styles/App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const savedTags = JSON.parse(localStorage.getItem("tags")) || [];
    setTasks(savedTasks);
    setTags(savedTags);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("tags", JSON.stringify(tags));
  }, [tasks, tags]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const markTaskAsDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const addTag = (tag) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const deleteTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="app">
      <Sidebar tags={tags} onAddTag={addTag} onDeleteTag={deleteTag} />
      <div className="main-content">
        <Header onAddTask={addTask} tags={tags} />
        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          onToggleDone={markTaskAsDone}
        />
      </div>
    </div>
  );
};

export default App;
