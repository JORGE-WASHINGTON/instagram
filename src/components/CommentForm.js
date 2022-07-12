import { useAddCommentMutation } from "../features/apiSlice/apiSlice";
import { useState } from "react";
import "./commentform.css";

const CommentForm = ({ postId }) => {
  const [comment, setComment] = useState("");
  const onCommentChange = (e) => {
    setComment(e.target.value);
  };

  const [addComment] = useAddCommentMutation();

  const onSaveCommentClicked = (e) => {
    console.log("hit");
    if (comment) {
      addComment({ postId: postId, user_id: 5, content: comment });
      setComment("");
    }
  };

  return (
    <div className="post-comment">
      <form>
        <textarea
          value={comment}
          autoComplete="off"
          autoCorrect="off"
          placeholder="Add a Comment"
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
