import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  const globalStyles = {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    backgroundColor: "#f0f2f5",
    minHeight: "100vh",
    color: "#333",
  };

  return (
    <div style={globalStyles}>
      <Navigation />
      <main>
        {}
        <Outlet />
      </main>
    </div>
  );
}

export default App;
