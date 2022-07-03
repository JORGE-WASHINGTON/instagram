import Avatar from "../../components/Avatar";
import { useState } from "react";
import CommentForm from "../../components/CommentForm";
import LikeButton from "../../components/LikeButton";
import {
  useGetUserByIdQuery,
  useAddLikeMutation,
  useGetLikesByPostIdQuery,
  fakeApi,
} from "../apiSlice/apiSlice";
import { Link } from "react-router-dom";
import "./postlist.css";

export const Post = ({ id }) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const { post } = fakeApi.useGetPostsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      post: data?.find((post) => post.id === id),
    }),
  });
  const { data: user, isLoading, error } = useGetUserByIdQuery(id);

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
            <div className="image-wrapper">
              {/* <Link to={`/p/${post.id}`}> */}
              <img src={post.image} alt="Author Avatar" />
              {/* </Link> */}
            </div>
          </div>
          <div className="post-details">
            <div className="details-buttons">
              <LikeButton
                postId={post.id}
                postLikes={postLikes}
                onAdd={addLike}
              />
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
