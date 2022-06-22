import React from "react";
import "./postlist.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUserById } from "../users/usersSlice";
import Avatar from "../../components/Avatar";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { IconContext } from "react-icons";

const Post = ({ post }) => {
  const user = useSelector((state) => selectUserById(state, post.user));
  const users = useSelector((state) => state.users);
  const whoLiked = post.likedBy.map((like) => {
    const user = users.find((user) => user.id === like);
    return { name: user.name, avatar: user.avatar };
  });

  return (
    <article className="post">
      <div className="post-header">
        <Avatar user={user} />
        <h2>{user.name}</h2>
      </div>
      <div className="post-image">
        <Link to={`/posts/${post.id}`}>
          <img src={post.image} alt="Author Avatar" />
        </Link>
      </div>
      <div className="post-details">
        <div className="details-buttons">
          <span className="like-icon">
            <button>
              <svg
                className="svgtag"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z" />
              </svg>
            </button>
          </span>
          <span className="like-icon">
            <button>
              <IconContext.Provider value={{ size: "2em", color: "red" }}>
                <AiOutlineHeart />
              </IconContext.Provider>
              {/* <svg
                className="svgtag"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg> */}
            </button>
          </span>
          <span className="like-icon">
            <button>
              <svg
                className="svgtag"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="22"
                  x2="9.218"
                  y1="3"
                  y2="10.083"
                ></line>
                <polygon
                  fill="none"
                  points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></polygon>
              </svg>
            </button>
          </span>
        </div>
        <div className="likes-info">
          <p>
            Liked by <span>{whoLiked[0].name}</span> and{" "}
            <span>other people</span>
          </p>
        </div>

        <p>
          <span>{user.name}</span> {post.description}
        </p>
        <div className="details-data">
          <p>See all comments</p>
          <p>{post.date}</p>
        </div>
      </div>

      <div className="post-comment">
        <form>
          <textarea
            autoComplete="off"
            autoCorrect="off"
            placeholder="Add a Comment"
          />
          <button disabled>Publish</button>
        </form>
      </div>
    </article>
  );
};

const PostList = () => {
  const [isOverflow, setIsOverflow] = useState(false);

  const posts = useSelector((state) => state.posts);
  const users = useSelector((state) => state.users);
  console.log(users);

  const renderedPosts = posts.map((post) => <Post post={post} key={post.id} />);

  return (
    <div className="wrapper">
      <section className="container">{renderedPosts}</section>
    </div>
  );
};

export default PostList;
