import React from "react";
import "../styles/Sidebar.css";
import TagInput from "./TagInput";

const Sidebar = ({ tags, onAddTag, onDeleteTag }) => {
  return (
    <div className="sidebar">
      <h3>Tags</h3>
      {tags.map((tag, index) => (
        <div key={index} className="tag">
          {tag}
          <span className="delete-tag" onClick={() => onDeleteTag(tag)}>
            ✕
          </span>
        </div>
      ))}
      <TagInput onAddTag={onAddTag} />
    </div>
  );
};

export default Sidebar;
