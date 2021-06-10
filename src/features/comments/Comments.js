import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentArticle } from "../currentArticle/currentArticleSlice";
import { isLoadingComments, loadCommentsForArticleId, selectComments } from "./commentsSlice";
import { CommentList } from "../../components/CommentList";
import { CommentForm } from "../../components/CommentForm";

export const Comments = () => {
  const dispatch = useDispatch();
  // Retrieve currentArticle, its comments and loading state using selectors
  const article = useSelector(selectCurrentArticle);
  const comments = useSelector(selectComments);
  const isLoading = useSelector(isLoadingComments);

  // Re-render when changing current article or dispatching
  useEffect(() => {
    if (article) {
      dispatch(loadCommentsForArticleId(article.id));
    }
  }, [article, dispatch]);

  // Display message when loading
  if (isLoading) {
    return <div>Loading Comments...</div>;
  } else if (!article) {
    return null;
  };

  // Convert comments object to an array
  const commentsForArticleId = article ? comments[article.id] : [];
  // Render CommentList and CommentForm
  return (
    <div className="comments-container">
      <h3 className="comments-title">Comments</h3>
      <CommentList comments={commentsForArticleId} />
      <CommentForm articleId={article.id} />
    </div>
  );
}