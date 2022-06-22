import React from "react";
import { useParams } from "react-router-dom";
import "./singlepostpage.css";
import { selectPostById } from "./postsSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectUserById } from "../users/usersSlice";
import Avatar from "../../components/Avatar";
import { addCommentToPost, addLikeToPost } from "./postsSlice";
import { useState } from "react";

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
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, Number(postId)));
  const user = useSelector((state) => selectUserById(state, post.user));
  const users = useSelector((state) => state.users);

  const [comment, setComment] = useState("");

  const onCommentChange = (e) => {
    setComment(e.target.value);
  };

  const dispatch = useDispatch();

  const onLikeClicked = () => {
    console.log("like hit");
    dispatch(addLikeToPost({ post: Number(postId), user: 6 }));
  };

  const onSaveCommentClicked = () => {
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
  };

  const renderedComments = post.comments.map((comment, i) => (
    <Comment
      comment={comment}
      users={users}
      userId={comment.comment_user}
      key={i}
    />
  ));

  return (
    <section className="singlepostpage-section">
      <article>
        <div className="image-container">
          <img src={`../${post.image}`} alt="" />
        </div>
        <div className="singlepostpage-details">
          <div className="details-header">
            <Avatar user={user} />
            <span>{user.name} • Following </span>
          </div>

          <div className="details-content">
            <ul className="comment-list">
              <div className="details-content-post-content">
                <Avatar user={user} />
                <div>
                  <p>
                    <span>{user.name}</span> Choose 1 French Adjective and use
                    it in a sentence. 💡Comment your sentence below! 👩‍🏫 Want to
                    learn more French? 👉Click the link in our bio at
                    @FrenchPod101_ to sign up for free and access the best
                    online resources!
                  </p>
                </div>
              </div>
              {renderedComments}

              {/*  */}
            </ul>
          </div>
          <div className="details-actions">
            <div className="details-buttons">
              <span className="like-icon">
                <button onClick={onLikeClicked}>
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
                  <svg
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
                  </svg>
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
            <div className="likes-information">
              <p>
                Liked by <span>someone</span> and <span>other people</span>
              </p>
            </div>
            <div className="post-comment">
              <form>
                <textarea
                  onChange={onCommentChange}
                  autoComplete="off"
                  autoCorrect="off"
                  placeholder="Add a Comment"
                />
                <button type="button" onClick={onSaveCommentClicked}>
                  Publish
                </button>
              </form>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SinglePostPage;

{
  /* 
  fakeData
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
                </li> */
}
