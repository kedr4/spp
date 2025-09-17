import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const navStyle = {
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    height: "60px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const logoStyle = {
    marginRight: "auto",
    fontWeight: "bold",
    fontSize: "1.2rem",
    color: "#333",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#555",
    padding: "0 15px",
    height: "60px",
    lineHeight: "60px",
    borderBottom: "2px solid transparent",
    transition: "color 0.2s, border-bottom-color 0.2s",
  };

  const getActiveLinkStyle = ({ isActive }) => {
    return isActive
      ? { ...linkStyle, color: "#007bff", borderBottomColor: "#007bff" }
      : linkStyle;
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>ProjectFlow</div>
      <NavLink to="/projects" style={getActiveLinkStyle}>
        Проекты
      </NavLink>
      <NavLink to="/profile" style={getActiveLinkStyle}>
        Профиль
      </NavLink>
    </nav>
  );
};

export default Navigation;
