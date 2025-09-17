import React from "react";

const ProjectCard = ({ project }) => {
  const cardStyle = {
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
    minWidth: "250px",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "translateY(-5px)";
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
  };

  const taskCount = project.tasks.length;

  return (
    <div
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 style={{ margin: "0 0 10px 0" }}>{project.name}</h3>
      <p style={{ margin: 0, color: "#666" }}>Задач: {taskCount}</p>
    </div>
  );
};

export default ProjectCard;
