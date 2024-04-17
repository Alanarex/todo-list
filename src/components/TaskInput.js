import React, { useState } from "react";
import "../styles/TaskInput.css";
import Select from 'react-select';

const TaskInput = ({ onAddTask, tags }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const options = tags.map(tag => ({
    value: tag.title,
    label: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{
          height: '15px',
          width: '15px',
          backgroundColor: tag.color,
          borderRadius: '50%',
          marginRight: '10px',
          display: 'inline-block'
        }} />
        {tag.title}
      </div>
    )
  }));

  const customStyles = {
    control: (provided) => ({
      ...provided,
      marginTop: '10px',
      marginBottom: '20px',
      minHeight: '30px',
      height: '30px',
      color: 'black'  // Ensures text color inside the control is black
    }),
    option: (provided, state) => ({
      ...provided,
      color: 'black',  // Text color for dropdown items
      backgroundColor: state.isFocused ? 'lightgray' : 'white',
      ':active': {
        ...provided[':active'],
        backgroundColor: 'lightgray',
      },
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: '30px'
    }),
    clearIndicator: (provided) => ({
      ...provided,
      padding: '5px'
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: '5px'
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: 'lightgray',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: 'black',  // Text color for selected items
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: 'black',  // X icon color for deselecting an option
      ':hover': {
        backgroundColor: 'red',
        color: 'white',
      },
    }),
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    onAddTask({
      id: Date.now(),
      title,
      description,
      tags: selectedTags.map(tag => tag.value), // Extract the title from selectedTags
      done: false,
    });
    setTitle("");
    setDescription("");
    setSelectedTags([]);
  };

  const handleTagChange = (selectedOption) => {
    setSelectedTags(selectedOption || []);
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
      <Select
        isMulti
        closeMenuOnSelect={false}
        options={options}
        value={selectedTags}
        onChange={handleTagChange}
        styles={customStyles}
        classNamePrefix="select"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
