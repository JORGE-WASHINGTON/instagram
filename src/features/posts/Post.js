import Avatar from "../../components/Avatar";
import { differenceInHours, differenceInDays } from "date-fns";
import { useState } from "react";
import CommentForm from "../../components/CommentForm";
import LikeButton from "../../components/LikeButton";
import {
  /* useGetUserByIdQuery,
  useAddLikeMutation,
  useGetLikesByPostIdQuery, */
  fakeApi,
} from "../apiSlice/apiSlice";
import { Link } from "react-router-dom";
import "./postlist.css";
import PostMedia from "../../components/PostMedia";

export const Post = ({ id }) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const { post } = fakeApi.useGetPostsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      post: data?.find((post) => post.id === id),
    }),
  });

  const hoursAgo = Math.abs(
    differenceInHours(new Date(post.createdAt), new Date())
  );
  let daysAgo;
  if (hoursAgo >= 24) {
    daysAgo = Math.abs(differenceInDays(new Date(post.createdAt), new Date()));
  }

  return (
    <>
      {post && (
        <article className="post">
          <div className="post-header">
            <Avatar userId={post.user_id} avatar={post.post_author_avatar} />
            <div>
              <h2>{post.post_author}</h2>
              <span>{post.location}</span>
            </div>
          </div>
          <PostMedia media={post.media} postId={post.id} />
          <div className="post-details">
            <div className="details-buttons">
              {/* <LikeButton
                postId={post.id}
                postLikes={postLikes}
                onAdd={addLike}
              /> */}
              <button className="like-icon">
                <Link to={`/p/${id}`}>
                  <svg
                    className="svg"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path
                      d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                      fill="none"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </Link>
              </button>
            </div>
            <div className="likes-info">
              {/* {postLikes?.length > 0 && (
                <p>
                  Liked by <span>{postLikes[0].user}</span> and{" "}
                  <span>other people</span>
                </p>
              )} */}
            </div>

            {post._description.length > 120 ? (
              <p>
                <span>{post.post_author}</span>{" "}
                {post._description.slice(0, 119)}{" "}
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
                  {post._description.slice(119, -1)}
                </span>
              </p>
            ) : (
              <p>
                <span>{post.post_author}</span> {post._description}
              </p>
            )}
            <div className="details-data">
              <Link to={`/p/${post.id}`}>
                <span>See all {post.comments.length} comments</span>
              </Link>
              <div style={{ marginTop: "8px" }}>
                {daysAgo ? (
                  <p>{`${daysAgo} days ago`}</p>
                ) : (
                  <p>{`${hoursAgo} hours ago`}</p>
                )}
              </div>
            </div>
          </div>
          <CommentForm postId={post.id} />
        </article>
      )}
    </>
  );
};
