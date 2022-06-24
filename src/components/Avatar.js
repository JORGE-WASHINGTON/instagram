import React from "react";
import "./avatar.css";
import { Link } from "react-router-dom";

const Avatar = ({ user }) => {
  return (
    <span className="avatar">
      <Link to={`/users/${user.id}`}>
        <img src={`${user.avatar}`} alt="profile photo" />
      </Link>
    </span>
  );
};

export default Avatar;
