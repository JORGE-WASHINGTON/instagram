import { useDispatch } from "react-redux";
import { useState } from "react";
import "./commentform.css";
import { addCommentToPost } from "../features/posts/postsSlice";

const CommentForm = ({ postId }) => {
  const [comment, setComment] = useState("");
  const onCommentChange = (e) => {
    setComment(e.target.value);
  };

  const onSaveCommentClicked = (e) => {
    console.log("hit");
    if (comment) {
      dispatch(
        addCommentToPost({
          id: 11,
          post: postId,
          content: comment,
          comment_user: 2,
        })
      );
    }
    setComment("");
  };

  const dispatch = useDispatch();

  return (
    <div className="post-comment">
      <form>
        <textarea
          autoComplete="off"
          autoCorrect="off"
          placeholder="Add a Comment"
          onChange={onCommentChange}
        />
        <button type="button" onClick={onSaveCommentClicked}>
          Publish
        </button>
      </form>
    </div>
  );
};

export default CommentForm;