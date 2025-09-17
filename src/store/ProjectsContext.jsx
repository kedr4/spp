import React, { createContext, useReducer, useContext } from "react";
import { initialProjects } from "../data";
import { generateUniqueId } from "../utils/idGenerator";

const ProjectsContext = createContext();

function projectsReducer(state, action) {
  switch (action.type) {
    case "ADD_PROJECT":
      const newProject = {
        id: generateUniqueId(),
        name: action.payload.name,
        tasks: [],
      };
      return [...state, newProject];

    case "ADD_TASK": {
      const { projectId, taskData } = action.payload;
      return state.map((p) =>
        p.id === projectId
          ? {
              ...p,
              tasks: [...p.tasks, { ...taskData, id: generateUniqueId() }],
            }
          : p
      );
    }

    case "UPDATE_TASK": {
      const { projectId, updatedTask } = action.payload;
      return state.map((p) =>
        p.id === projectId
          ? {
              ...p,
              tasks: p.tasks.map((t) =>
                t.id === updatedTask.id ? updatedTask : t
              ),
            }
          : p
      );
    }

    case "DELETE_TASK": {
      const { projectId, taskId } = action.payload;
      return state.map((p) =>
        p.id === projectId
          ? { ...p, tasks: p.tasks.filter((t) => t.id !== taskId) }
          : p
      );
    }

    default:
      return state;
  }
}

export const ProjectsProvider = ({ children }) => {
  const [projects, dispatch] = useReducer(projectsReducer, initialProjects);

  return (
    <ProjectsContext.Provider value={{ projects, dispatch }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (context === undefined) {
    throw new Error("useProjects must be used within a ProjectsProvider");
  }
  return context;
};
