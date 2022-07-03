import React from "react";
import "./postlist.css";
import { useGetPostsQuery } from "../apiSlice/apiSlice";
import { Post } from "./Post";

const PostList = () => {
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
