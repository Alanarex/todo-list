import React from "react";
import "../styles/Sidebar.css";
import TagInput from "./TagInput";

const Sidebar = ({ tags, onAddTag, onDeleteTag }) => {
  return (
    <div className="sidebar">
      <h3>Tags</h3>
      {tags.map((tag, index) => (
        <div key={index} className="tag">
          <span
            style={{
              height: "25px",
              width: "25px",
              backgroundColor: tag.color,
              borderRadius: "50%",
              display: "inline-block",
              marginRight: "5px",
            }}
          ></span>
          {tag.title}
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
