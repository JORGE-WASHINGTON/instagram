import React from "react";
import "./navbar.css";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiFillHome,
  AiOutlineMessage,
  AiOutlinePlusCircle,
  AiOutlineCompass,
} from "react-icons/ai";

import { IconContext } from "react-icons";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <div className="logo"></div>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
        <div className="navigation">
          <button className="navigation-buttons">
            <IconContext.Provider value={{ size: "2em" }}>
              <AiFillHome />
            </IconContext.Provider>
          </button>
          <button className="navigation-buttons">
            <IconContext.Provider value={{ size: "2em" }}>
              <AiOutlineMessage />
            </IconContext.Provider>
          </button>
          <button className="navigation-buttons">
            <IconContext.Provider value={{ size: "2em" }}>
              <AiOutlinePlusCircle />
            </IconContext.Provider>
          </button>
          <button className="navigation-buttons">
            <IconContext.Provider value={{ size: "2em" }}>
              <AiOutlineCompass />
            </IconContext.Provider>
          </button>
          <button className="navigation-buttons">
            <IconContext.Provider value={{ size: "2em" }}>
              <AiOutlineHeart />
            </IconContext.Provider>
          </button>
          <button className="navigation-buttons">
            <IconContext.Provider value={{ size: "2em" }}>
              <AiOutlineUser />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
