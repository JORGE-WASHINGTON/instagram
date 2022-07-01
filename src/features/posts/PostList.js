import React from "react";
import "./postlist.css";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import CommentForm from "../../components/CommentForm";
import LikeButton from "../../components/LikeButton";
import {
  useGetPostsQuery,
  useGetUserByIdQuery,
  useAddLikeMutation,
  useGetLikesByPostIdQuery,
  fakeApi,
} from "../apiSlice/apiSlice";
import { useState } from "react";

const Post = ({ id }) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const { post } = fakeApi.useGetPostsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      post: data?.find((post) => post.id === id),
    }),
  });
  const { data: user, isLoading, error } = useGetUserByIdQuery(post.user);

  const {
    data: postLikes,
    error: likesError,
    isLoading: likesLoading,
  } = useGetLikesByPostIdQuery(id);

  const [addLike] = useAddLikeMutation();

  return (
    <>
      {user && (
        <article className="post">
          <div className="post-header">
            <Avatar user={user} />
            <div>
              <h2>{user.name}</h2>
              <span>{`${post.location.city}, ${post.location.state}, ${post.location.country}`}</span>
            </div>
          </div>
          <div className="post-image">
            <Link to={`/p/${post.id}`}>
              <img src={post.image} alt="Author Avatar" />
            </Link>
          </div>
          <div className="post-details">
            <div className="details-buttons">
              <LikeButton
                postId={post.id}
                postLikes={postLikes}
                onAdd={addLike}
              />
            </div>
            <div className="likes-info">
              {postLikes?.length > 0 && (
                <p>
                  Liked by <span>{postLikes[0].user}</span> and{" "}
                  <span>other people</span>
                </p>
              )}
            </div>
            {post.description.length > 120 ? (
              <p>
                <span>{user.name}</span> {post.description.slice(0, 119)}{" "}
                <span
                  onClick={() => setIsDescriptionExpanded(true)}
                  style={{
                    cursor: "pointer",
                    display: isDescriptionExpanded ? "none" : "inline",
                  }}
                >
                  ... more
                </span>
                <span
                  style={{
                    display: isDescriptionExpanded ? "inline" : "none",
                    fontWeight: 400,
                  }}
                >
                  {post.description.slice(119, -1)}
                </span>
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
      )}
    </>
  );
};

const PostList = () => {
  const [isOverflow, setIsOverflow] = useState(false);

  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();

  let content;

  if (isLoading) {
    content = (
      <div className="loading-screen">
        <img src={"instagram-logo.png"} />
      </div>
    );
  } else if (isSuccess) {
    const renderedPosts = posts.map((post) => (
      <Post id={post.id} key={post.id} />
    ));

    content = renderedPosts;
  } else if (isError) {
    content = <div>{error.message}</div>;
  }

  return <section className="container">{content}</section>;
};

export default PostList;
