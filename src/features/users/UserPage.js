/* import React from "react";
import { useParams } from "react-router-dom";
import "./userpage.css";

const UserPage = () => {
  const { userId } = useParams();

  const currentUser = 1;

  const isFollowed = user.followers.includes(currentUser);

  const dispatch = useDispatch();

  const onFollowClick = (isFollowed) => {
    isFollowed
      ? dispatch(unfollowUser({ unfollowedUser: user.id, currentUser }))
      : dispatch(followUser({ followedUser: user.id, currentUser }));
  };
 
  return (
    <section className="profile-page-container">
       <div className="profile-page-infocontainer">
        <div className="profile-page-avatar">
          <img src={user.image} alt="" />
        </div>
        <div className="profile-page-userinfo">
          <div className="profile-page-info-header">
            <h1>{user.username}</h1>
            <button
              className={isFollowed ? "unfollow-button" : "follow-button"}
              onClick={() => onFollowClick(isFollowed)}
            >
              Follow
            </button>
          </div>

          <ul className="profile-page-stats">
            <li>
              <span>{posts.posts.length}</span> posts
            </li>
            <li>
              <span>10</span> followers
            </li>
            <li>
              <span>20</span> following
            </li>
          </ul>
          <h2>{user.username}</h2>
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
 */
