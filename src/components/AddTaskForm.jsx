import React, { useState } from "react";
import { generateUniqueId } from "../utils/idGenerator";

const AddTaskForm = ({ onAddTask }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !assignee.trim()) {
      alert("Название и исполнитель — обязательные поля.");
      return;
    }

    const newTask = {
      id: generateUniqueId(),
      name,
      description,
      assignee,
      status: "ToDo",
    };

    onAddTask(newTask);

    setName("");
    setDescription("");
    setAssignee("");
  };

  const formStyle = {
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    marginBottom: "30px",
  };
  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    boxSizing: "border-box",
  };
  const buttonStyle = {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#28a745",
    color: "white",
    cursor: "pointer",
    fontSize: "1rem",
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h3 style={{ marginTop: 0 }}>Добавить новую задачу</h3>
      <input
        type="text"
        placeholder="Название задачи"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Исполнитель"
        value={assignee}
        onChange={(e) => setAssignee(e.target.value)}
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>
        Добавить
      </button>
    </form>
  );
};

export default AddTaskForm;
