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
    let canAddTag = true;
    tags.forEach((existingTag) => {
      if (existingTag.title === tag.title) {
        canAddTag = false;
      }
    });
    if (canAddTag) setTags([...tags, tag]);
  };

  const deleteTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const onRemoveTag = (thatTask, tagToRemove) => {
    // Tag titles are unique (see addTag); build new objects instead of mutating state
    setTasks(
      tasks.map((task) =>
        task.id === thatTask.id
          ? { ...task, tags: task.tags.filter((tag) => tag.title !== tagToRemove.title) }
          : task
      )
    );
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
          onRemoveTag={onRemoveTag}
        />
      </div>
    </div>
  );
};

export default App;
