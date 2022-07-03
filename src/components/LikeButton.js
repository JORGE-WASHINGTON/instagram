import {
  useAddLikeMutation,
  useRemoveLikeMutation,
} from "../features/apiSlice/apiSlice";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const LikeButton = ({ postId, postLikes }) => {
  const currentUser = 8;

  const [addLike] = useAddLikeMutation();
  const [removeLike, isLoading] = useRemoveLikeMutation();

  const like = postLikes?.find((like) => like.user === currentUser);

  console.log(like ? true : false, postId);

  const [isLiked, setIsLiked] = useState(null);

  useEffect(() => {
    if (like) {
      setIsLiked(true);
    }
  }, [like]);

  return (
    <button
      className="like-icon"
      onClick={() => {
        if (isLiked) {
          removeLike({ likeId: like.id, postId: postId });
          setIsLiked(false);
        } else {
          addLike({ id: uuidv4(), user: currentUser, postId: postId });
          setIsLiked(true);
        }
      }}
    >
      <span>
        <svg
          className={isLiked ? "liked svg-clicked" : "svg"}
          height="24"
          viewBox="0 0 48 52"
          width="24"
        >
          <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
        </svg>
      </span>
    </button>
  );
};

export default LikeButton;
