import React from "react";

const TaskCard = ({ task, onEdit, onDelete }) => {
  const cardStyle = {
    padding: "15px",
    marginBottom: "10px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transition: "box-shadow 0.2s ease-in-out",
    cursor: "pointer",
  };

  const assigneeStyle = {
    fontSize: "0.9rem",
    color: "#5e6c84",
    marginTop: "12px",
    fontWeight: "600",
  };

  const actionsStyle = {
    marginTop: "15px",
    display: "flex",
    gap: "10px",
    borderTop: "1px solid #f0f0f0",
    paddingTop: "10px",
  };

  const buttonStyle = {
    padding: "5px 10px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: "#f5f5f5",
    transition: "background-color 0.2s",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.boxShadow =
      "0 5px 10px rgba(0,0,0,0.15), 0 3px 3px rgba(0,0,0,0.20)";
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.boxShadow =
      "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)";
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h4 style={{ margin: "0 0 8px 0", color: "#172b4d" }}>{task.name}</h4>
      <p style={{ margin: 0, fontSize: "0.9rem", color: "#5e6c84" }}>
        {task.description}
      </p>
      <div style={assigneeStyle}>Исполнитель: {task.assignee}</div>

      <div style={actionsStyle}>
        <button onClick={() => onEdit(task)} style={buttonStyle}>
          Изменить
        </button>
        <button
          onClick={() => onDelete(task.id)}
          style={{ ...buttonStyle, color: "#dc3545" }}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
