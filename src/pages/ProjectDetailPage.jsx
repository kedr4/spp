import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useProjects } from "../store/ProjectsContext";

import KanbanColumn from "../components/KanbanColumn";
import AddTaskForm from "../components/AddTaskForm";
import Modal from "../components/Modal";

const EditTaskForm = ({ task, onSave, onCancel }) => {
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const [assignee, setAssignee] = useState(task.assignee);
  const [status, setStatus] = useState(task.status);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...task, name, description, assignee, status });
  };

  const formStyle = { display: "flex", flexDirection: "column", gap: "15px" };
  const inputStyle = {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  };
  const buttonStyle = {
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h3>Редактирование задачи</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        value={assignee}
        onChange={(e) => setAssignee(e.target.value)}
        style={inputStyle}
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        style={inputStyle}
      >
        <option value="ToDo">К выполнению</option>
        <option value="In Progress">В процессе</option>
        <option value="Done">Готово</option>
      </select>
      <button type="submit" style={buttonStyle}>
        Сохранить
      </button>
    </form>
  );
};

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const { projects, dispatch } = useProjects();
  const [editingTask, setEditingTask] = useState(null);

  const project = projects.find((p) => p.id === projectId);

  const handleAddTask = (taskData) => {
    dispatch({ type: "ADD_TASK", payload: { projectId, taskData } });
  };

  const handleDeleteTask = (taskId) => {
    if (window.confirm("Вы уверены, что хотите удалить эту задачу?")) {
      dispatch({ type: "DELETE_TASK", payload: { projectId, taskId } });
    }
  };

  const handleSaveChanges = (updatedTask) => {
    dispatch({ type: "UPDATE_TASK", payload: { projectId, updatedTask } });
    setEditingTask(null);
  };

  if (!project) {
    /* todo */
  }

  const todoTasks = project.tasks.filter((t) => t.status === "ToDo");
  const inProgressTasks = project.tasks.filter(
    (t) => t.status === "In Progress"
  );
  const doneTasks = project.tasks.filter((t) => t.status === "Done");

  const kanbanBoardStyle = { display: "flex", gap: "20px", padding: "20px" };

  return (
    <div style={{ padding: "20px 40px" }}>
      <Link to="/projects">← Все проекты</Link>
      <h1>{project.name}</h1>
      <AddTaskForm onAddTask={handleAddTask} />
      <div style={kanbanBoardStyle}>
        <KanbanColumn
          title="К выполнению"
          tasks={todoTasks}
          statusColor="#ffc107"
          onEditTask={setEditingTask}
          onDeleteTask={handleDeleteTask}
        />
        <KanbanColumn
          title="В процессе"
          tasks={inProgressTasks}
          statusColor="#007bff"
          onEditTask={setEditingTask}
          onDeleteTask={handleDeleteTask}
        />
        <KanbanColumn
          title="Готово"
          tasks={doneTasks}
          statusColor="#28a745"
          onEditTask={setEditingTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>

      {editingTask && (
        <Modal onClose={() => setEditingTask(null)}>
          <EditTaskForm
            task={editingTask}
            onSave={handleSaveChanges}
            onCancel={() => setEditingTask(null)}
          />
        </Modal>
      )}
    </div>
  );
};

export default ProjectDetailPage;
