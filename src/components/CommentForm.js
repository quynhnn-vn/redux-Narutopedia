import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isPendingCreateComment,
  postCommentForArticleId,
} from "../features/comments/commentsSlice";

export const CommentForm = ({ articleId }) => {
  const dispatch = useDispatch();
  // Keep the current value of comment in form
  const [comment, setComment] = useState("");
  // Retrieve posting state from selector
  const isPending = useSelector(isPendingCreateComment);

  // Display message when loading
  if (isPending) {
    return <div>Creating Comment...</div>;
  }
  // Handle submit form: post comment and reset comment value 
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postCommentForArticleId({ articleId, comment }));
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="label" for="comment">
        Add Comment:
      </label>
      <div id="input-container">
        <input
          id="comment"
          value={comment}
          type="text"
          onChange={(e) => setComment(e.currentTarget.value)}
        />
        <button
          className="comment-button"
          disabled={isPending || comment.length <= 0}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
