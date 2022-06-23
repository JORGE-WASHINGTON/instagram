import React from "react";
import "./postlist.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUserById } from "../users/usersSlice";
import Avatar from "../../components/Avatar";
import { addLike, removeLike, addCommentToPost } from "./postsSlice";
import { useDispatch } from "react-redux";
import CommentForm from "../../components/CommentForm";
import LikeButton from "../../components/LikeButton";

const Post = ({ post, currentUser }) => {
  const user = useSelector((state) => selectUserById(state, post.user));
  const users = useSelector((state) => state.users);
  const whoLiked = post.likedBy.map((like) => {
    const user = users.find((user) => user.id === like);
    return { name: user.name, avatar: user.avatar };
  });
  /* const isLiked = post.likedBy.includes(currentUser); */

  /* const onLikeClick = (isLiked) => {
    isLiked
      ? dispatch(removeLike({ post: post.id, currentUser }))
      : dispatch(addLike({ post: post.id, currentUser }));
  }; */

  return (
    <article className="post">
      <div className="post-header">
        <Avatar user={user} />
        <h2>{user.name}</h2>
      </div>
      <div className="post-image">
        <Link to={`/p/${post.id}`}>
          <img src={post.image} alt="Author Avatar" />
        </Link>
      </div>
      <div className="post-details">
        <div className="details-buttons">
          {/*  <button onClick={() => onLikeClick(isLiked)}>
            <span className="like-icon">
              <svg
                className={isLiked ? "liked svg-clicked" : "svg"}
                height="24"
                viewBox="0 0 48 52"
                width="24"
              >
                <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
              </svg>
            </span>
          </button> */}
          <LikeButton post={post} />
        </div>
        <div className="likes-info">
          <p>
            Liked by{" "}
            <span>
              <Link to={`/${whoLiked[0].name}`}>{whoLiked[0].name}</Link>
            </span>{" "}
            and <span>other people</span>
          </p>
        </div>
        {post.description.length > 120 ? (
          <p>
            <span>{user.name}</span> {post.description.slice(0, 119)}
            ...<span>mais</span>
          </p>
        ) : (
          <p>
            <span>{user.name}</span> {post.description}
          </p>
        )}
        <div className="details-data">
          <Link to={`/p/${post.id}`}>
            <span>See all comments</span>
          </Link>
          <p>{post.date}</p>
        </div>
      </div>
      <CommentForm postId={post.id} />
    </article>
  );
};

const PostList = () => {
  const [isOverflow, setIsOverflow] = useState(false);
  const currentUser = 1;
  const posts = useSelector((state) =>
    state.posts.filter((post) => post.user !== currentUser)
  );
  const users = useSelector((state) => state.users);

  const renderedPosts = posts.map((post) => (
    <Post currentUser={currentUser} post={post} key={post.id} />
  ));

  return (
    <div className="wrapper">
      <section className="container">{renderedPosts}</section>
    </div>
  );
};

export default PostList;
