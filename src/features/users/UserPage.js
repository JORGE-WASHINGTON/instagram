import React from "react";
import { useParams } from "react-router-dom";
import "./userpage.css";
import { useSelector } from "react-redux";
import { followUser } from "./usersSlice";
import { useDispatch } from "react-redux";

const UserPage = () => {
  const { username } = useParams();
  const user = useSelector((state) =>
    state.users.find((user) => user.name === username)
  );

  const dispatch = useDispatch();
  const currentUser = 1;

  const onFollowClick = () => {
    dispatch(followUser({ followedUser: user.id, currentUser }));
  };

  return (
    <section className="profile-page-container">
      <div className="profile-page-infocontainer">
        <div className="profile-page-avatar">
          <img src={user.avatar} alt="" />
        </div>
        <div className="profile-page-userinfo">
          <div className="profile-page-info-header">
            <h1>
              Livia Moara Silva do Nascimento ola que talLivia Moara Silva do
              Nascimento ola que tal
            </h1>
            <button onClick={onFollowClick}>Follow</button>
          </div>

          <ul className="profile-page-stats">
            <li>
              <span>{user.posts.length}</span> posts
            </li>
            <li>
              <span>{user.followers.length}</span> followers
            </li>
            <li>
              <span>{user.following.length}</span> following
            </li>
          </ul>
          <h2>{username}</h2>
        </div>
      </div>
      <div className="profile-page-media-container">
        <div className="profile-page-media-options">
          <span className="selected">POSTS</span>
          <span>SAVED</span>
          <span>TAGGED</span>
        </div>
      </div>
    </section>
  );
};

export default UserPage;
