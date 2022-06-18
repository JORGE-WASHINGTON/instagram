import React from "react";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <i></i>
        </div>
        <div className="search"></div>
        <div className="navigation"></div>
      </div>
    </nav>
  );
};

export default NavBar;
