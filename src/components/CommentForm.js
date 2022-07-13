import { useAddCommentMutation } from "../features/apiSlice/apiSlice";
import { useState } from "react";

import "./commentform.css";
import CommentSpinner from "./CommentSpinner";

const CommentForm = ({ postId, onCommentAdded }) => {
  const [comment, setComment] = useState("");
  const onCommentChange = (e) => {
    setComment(e.target.value);
  };

  const [addComment, { isLoading: isAddingComment }] = useAddCommentMutation();

  const onSaveCommentClicked = (e) => {
    console.log("hit");
    if (comment) {
      addComment({ postId: postId, user_id: 5, content: comment });
      setComment("");
      onCommentAdded({ user: "my name", content: comment });
    }
  };

  return (
    <div className="post-comment">
      <form style={{ position: "relative" }}>
        {isAddingComment && <CommentSpinner />}
        <textarea
          value={comment}
          autoComplete="off"
          autoCorrect="off"
          placeholder="Add a Comment"
          disabled={isAddingComment ? true : false}
          onChange={onCommentChange}
        />

        <button
          disabled={comment ? false : true}
          type="button"
          onClick={onSaveCommentClicked}
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
