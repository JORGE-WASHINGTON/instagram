import React from "react";
import "./avatar.css";
import { Link } from "react-router-dom";

const Avatar = ({ userId, avatar }) => {
  return (
    <span className="avatar">
      <Link to={`/users/${userId}`}>
        <img src={`${avatar}`} alt="profile photo" />
      </Link>
    </span>
  );
};

export default Avatar;
