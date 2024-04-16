import React, { useState } from "react";
import "../styles/TagInput.css";

const TagInput = ({ onAddTag }) => {
  const [tag, setTag] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tag) return;
    onAddTag(tag);
    setTag("");
  };

  return (
    <form onSubmit={handleSubmit} className="tag-input">
      <input
        type="text"
        placeholder="Add new tag"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />
      <button type="submit">Add Tag</button>
    </form>
  );
};

export default TagInput;
