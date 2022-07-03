import React from "react";
import { useParams } from "react-router-dom";
import "./singlepostpage.css";
import Avatar from "../../components/Avatar";

import { useState } from "react";
import CommentForm from "../../components/CommentForm";
import LikeButton from "../../components/LikeButton";

import {
  useGetPostQuery,
  useGetUserByIdQuery,
  useGetUsersQuery,
  fakeApi,
} from "../apiSlice/apiSlice";

const emptyArray = [];

const Comment = ({ userId, users, comment }) => {
  const user = users.find((user) => user.id === userId);
  return (
    <li>
      <Avatar user={user} />
      <div>
        <p>
          <span> {user.name} </span> {comment.content}
        </p>
      </div>
    </li>
  );
};

const SinglePostPage = () => {
  const [skip, setSkip] = useState(true);
  const { postId } = useParams();
  const { post } = fakeApi.useGetPostsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      post: data?.find((post) => post.id === Number(postId)),
    }),
  });

  const { postLikes } = fakeApi.useGetLikesByPostIdQuery(postId, {
    selectFromResult: ({ data }) => ({
      postLikes: data,
    }),
  });
  const [comment, setComment] = useState("");

  const onCommentChange = (e) => {
    setComment(e.target.value);
  };

  /* const onSaveCommentClicked = () => {
    console.log("hit");
    if (comment) {
      dispatch(
        addCommentToPost({
          id: 11,
          post: Number(postId),
          content: comment,
          comment_user: 2,
        })
      );
    }
    setComment("");
  }; */

  /* const renderedComments = post.comments.map((comment, i) => (
    <Comment
      comment={comment}
      users={users}
      userId={comment.comment_user}
      key={i}
    />
  )); */

  let content;
  if (!post) {
    content = <div>Is loading</div>;
  }

  if (post) {
    content = (
      <article>
        <div className="image-container">
          <img src={`${post.image}`} alt="" />
        </div>
        <div className="singlepostpage-details">
          <div className="details-header">
            <Avatar user={post.user} />
            <span>{post.user.name} • Following </span>
          </div>

          <div className="details-content">
            <ul className="comment-list">
              <div className="details-content-post-content">
                <Avatar user={post.user} />
                <div>
                  <p>
                    <span>{post.user.name}</span> Choose 1 French Adjective and
                    use it in a sentence. 💡Comment your sentence below! 👩‍🏫 Want
                    to learn more French? 👉Click the link in our bio at
                    @FrenchPod101_ to sign up for free and access the best
                    online resources!
                  </p>
                </div>
              </div>
              {/* {renderedComments} */}
            </ul>
          </div>
          <div className="details-actions">
            <div className="details-buttons">
              <LikeButton postId={post.id} postLikes={postLikes} />
            </div>
            <div className="likes-information">
              <p>
                Liked by <span>someone</span> and <span>other people</span>
              </p>
            </div>
            <CommentForm postId={post.id} />
          </div>
        </div>
      </article>
    );
  }

  return <section className="singlepostpage-section">{content}</section>;
};

export default SinglePostPage;

{
  /* <li style={{ display: "flex" }}>
                  <Avatar user={user} />
                  <div>
                    <p>
                      <span>{user.name}</span> Choose 1 French Adjective and use
                      it in a sentence. 💡Comment your sentence below! 👩‍🏫 Want
                      to learn more French? 👉Click the link in our bio at
                      @FrenchPod101_ to sign up for free and access the best
                      online resources!
                    </p>
                  </div>
                </li>
                <li style={{ display: "flex" }}>
                  <Avatar user={user} />
                  <div>
                    <p>
                      <span>{user.name}</span> Choose 1 French Adjective and use
                      it in a sentence. 💡Comment your sentence below! 👩‍🏫 Want
                      to learn more French? 👉Click the link in our bio at
                      @FrenchPod101_ to sign up for free and access the best
                      online resources!
                    </p>
                  </div>
                </li>
                <li style={{ display: "flex" }}>
                  <Avatar user={user} />
                  <div>
                    <p>
                      <span>{user.name}</span> Choose 1 French Adjective and use
                      it in a sentence. 💡Comment your sentence below! 👩‍🏫 Want
                      to learn more French? 👉Click the link in our bio at
                      @FrenchPod101_ to sign up for free and access the best
                      online resources!
                    </p>
                  </div>
                </li>
                <li style={{ display: "flex" }}>
                  <Avatar user={user} />
                  <div>
                    <p>
                      <span>{user.name}</span> Choose 1 French Adjective and use
                      it in a sentence. 💡Comment your sentence below! 👩‍🏫 Want
                      to learn more French? 👉Click the link in our bio at
                      @FrenchPod101_ to sign up for free and access the best
                      online resources!
                    </p>
                  </div>
                </li>   */
}
