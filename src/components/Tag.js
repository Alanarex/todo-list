import React from "react";

const Tag = ({ tag, onRemoveTag, task = null }) => {
  return (
    <div
      key={tag.tagId}
      className="tag"
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "5px",
      }}
    >
      <span
        style={{
          height: "25px",
          width: "25px",
          backgroundColor: tag.color,
          borderRadius: "50%",
          marginRight: "10px",
        }}
      />
      <span>{tag.title}</span>
      <button
        onClick={() => (task ? onRemoveTag(task, tag) : onRemoveTag(tag))}
        className="delete-tag"
      >
        X
      </button>
    </div>
  );
};

export default Tag;
