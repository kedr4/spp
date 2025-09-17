import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { ProjectsProvider } from "./store/ProjectsContext.jsx";

import ProjectsPage from "./pages/ProjectsPage.jsx";
import ProjectDetailPage from "./pages/ProjectDetailPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "projects", element: <ProjectsPage /> },
      { path: "projects/:projectId", element: <ProjectDetailPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "/", element: <ProjectsPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProjectsProvider>
      <RouterProvider router={router} />
    </ProjectsProvider>
  </React.StrictMode>
);
