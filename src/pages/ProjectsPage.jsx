import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useProjects } from "../store/ProjectsContext";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  const { projects, dispatch } = useProjects();
  const [newProjectName, setNewProjectName] = useState("");

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!newProjectName.trim()) return;
    dispatch({ type: "ADD_PROJECT", payload: { name: newProjectName } });
    setNewProjectName("");
  };

  const pageStyle = { padding: "20px 40px" };
  const listStyle = {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "20px",
  };
  const formStyle = { display: "flex", gap: "10px", marginTop: "20px" };
  const inputStyle = {
    padding: "10px",
    flexGrow: 1,
    border: "1px solid #ddd",
    borderRadius: "4px",
  };
  const buttonStyle = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
  };

  return (
    <div style={pageStyle}>
      <h1>Проекты</h1>

      <form onSubmit={handleAddProject} style={formStyle}>
        <input
          type="text"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
          placeholder="Название нового проекта"
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Создать проект
        </button>
      </form>

      <div style={listStyle}>
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            style={{ textDecoration: "none" }}
          >
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
