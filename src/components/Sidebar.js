import React from "react";
import "../styles/Sidebar.css";
import TagInput from "./TagInput";
import Tag from "./Tag";

const Sidebar = ({ tags, onAddTag, onDeleteTag }) => {
  return (
    <div className="sidebar">
      <h3>Tags</h3>
      {tags.map((tag, index) => (
        <Tag key={tag.id} tag={tag} onRemoveTag={onDeleteTag} />
      ))}
      <TagInput onAddTag={onAddTag} />
    </div>
  );
};

export default Sidebar;
