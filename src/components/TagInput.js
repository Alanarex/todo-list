import React, { useState } from "react";
import "../styles/TagInput.css";

const TagInput = ({ onAddTag }) => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return; // Prevents adding empty tags
    const newTag = {
      title: title,
      color: color,
      Id: Date.now(),
    };
    onAddTag(newTag);
    setTitle("");
    setColor("#000000");
  };

  return (
    <form onSubmit={handleSubmit} className="tag-input">
      <div className="inputs">
        <input
          style={{
            height: "25px",
            width: "30px",
            backgroundColor: color,
            borderRadius: "50%",
            display: "inline-block",
          }}
          type="color"
          id="head"
          name="head"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Add new tag"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button type="submit">Add Tag</button>
    </form>
  );
};

export default TagInput;
