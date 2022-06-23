import React from "react";
import { useParams } from "react-router-dom";
import "./singlepostpage.css";
import { selectPostById } from "./postsSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectUserById } from "../users/usersSlice";
import Avatar from "../../components/Avatar";
import { addCommentToPost, addLike } from "./postsSlice";
import { useState } from "react";
import CommentForm from "../../components/CommentForm";
import LikeButton from "../../components/LikeButton";

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
  console.log(typeof post.id);
  const user = useSelector((state) => selectUserById(state, post.user));
  const users = useSelector((state) => state.users);

  /* const [comment, setComment] = useState("");

  const onCommentChange = (e) => {
    setComment(e.target.value);
  }; */

  /* const dispatch = useDispatch();

  const onLikeClicked = () => {
    console.log("like hit");
    dispatch(addLike({ post: Number(postId), user: 6 }));
  }; */

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
              <LikeButton post={post} />
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
