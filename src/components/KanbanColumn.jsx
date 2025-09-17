import React from "react";
import TaskCard from "./TaskCard";

const KanbanColumn = ({
  title,
  tasks,
  statusColor,
  onEditTask,
  onDeleteTask,
}) => {
  const columnStyle = {
    flex: 1,
    padding: "15px",
    backgroundColor: "#f4f5f7",
    borderRadius: "8px",
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
  };

  const headerStyle = {
    paddingBottom: "10px",
    marginBottom: "15px",
    borderBottom: `3px solid ${statusColor || "#ccc"}`,
    fontSize: "1rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#5e6c84",
  };

  const tasksContainerStyle = {
    flexGrow: 1,
    minHeight: "100px",
  };

  return (
    <div style={columnStyle}>
      <h3 style={headerStyle}>
        {title} ({tasks.length})
      </h3>
      <div style={tasksContainerStyle}>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={onEditTask}
            onDelete={onDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
