import React, { useState } from "react";
import "../styles/TaskInput.css";
import Select from "react-select";

const TaskInput = ({ onAddTask, tags }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  // Mapping tags for use in react-select
  const tagOptions = tags.map((tag) => ({
    label: tag.title,
    value: tag.title,
    color: tag.color,
  }));

  const customStyles = {
    control: (base) => ({
      ...base,
      minHeight: 36,
      marginTop: "10px",
      marginBottom: "20px",
    }),
    valueContainer: (base) => ({
      ...base,
      padding: "0 6px",
    }),
    clearIndicator: (base) => ({
      ...base,
      cursor: "pointer",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      cursor: "pointer",
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: "lightgray",
    }),
    multiValueLabel: (base, state) => ({
      ...base,
      color: state.data.color,
    }),
    multiValueRemove: (base, state) => ({
      ...base,
      color: state.data.color,
      ":hover": {
        backgroundColor: "darkred",
        color: "white",
      },
    }),
    option: (base, state) => ({
      ...base,
      color: state.data.color,
      backgroundColor: state.isFocused ? "lightgray" : "white",
      ":active": {
        backgroundColor: state.isSelected ? state.data.color : "lightblue",
      },
    }),
  };

  const handleTagChange = (selectedOptions) => {
    setSelectedTags(selectedOptions || []);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    onAddTask({
      id: Date.now(),
      title,
      description,
      tags: selectedTags.map((tag) => ({ title: tag.label, color: tag.color })),
      done: false,
    });
    setTitle("");
    setDescription("");
    setSelectedTags([]);
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <Select
        isMulti
        closeMenuOnSelect={false}
        options={tagOptions}
        getOptionLabel={(option) => (
          <div style={{ display: "flex", alignItems: "center" }}>
            <span
              style={{
                height: "10px",
                width: "10px",
                borderRadius: "50%",
                backgroundColor: option.color,
                marginRight: "10px",
              }}
            />
            {option.label}
          </div>
        )}
        getOptionValue={(option) => option.label}
        styles={customStyles}
        onChange={handleTagChange}
        value={selectedTags}
        classNamePrefix="select"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
