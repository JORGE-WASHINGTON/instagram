import React from "react";
import "./navbar.css";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiFillHome,
  AiOutlineMessage,
  AiOutlinePlusCircle,
  AiOutlineCompass,
  AiFillHeart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { IconContext } from "react-icons";

const NavBar = () => {
  const currentUser = useSelector((state) => state.users[0]);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <Link to="/">
            <div className="logo"></div>
          </Link>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
        <div className="navigation">
          <Link to="/">
            <button className="navigation-buttons">
              <IconContext.Provider value={{ size: "2em" }}>
                <AiFillHome />
              </IconContext.Provider>
            </button>
          </Link>

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
            <IconContext.Provider value={{ size: "2em", color: "black" }}>
              <Link to={`/${currentUser.name}`}>
                <AiOutlineUser />
              </Link>
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
