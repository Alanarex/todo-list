import React, { useState } from "react";
import "../styles/TaskInput.css";

const TaskInput = ({ onAddTask, tags }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    onAddTask({
      id: Date.now(),
      title,
      description,
      tags: selectedTags,
      done: false,
    });
    setTitle("");
    setDescription("");
    setSelectedTags([]);
  };

  const handleTagSelection = (event) => {
    const selectedOptions = Array.from(event.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setSelectedTags(selectedOptions);
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        multiple={true}
        value={selectedTags}
        onChange={handleTagSelection}
        className="tag-select"
      >
        {tags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
