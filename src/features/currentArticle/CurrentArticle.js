import React from "react";
import { useSelector } from "react-redux";
import {
  isLoadingCurrentArticle,
  selectCurrentArticle,
} from "./currentArticleSlice";
import { FullArticle } from "../../components/FullArticle";

export const CurrentArticle = () => {
  // Retrieve currentArticle data and loading state using selectors
  const article = useSelector(selectCurrentArticle);
  const isLoading = useSelector(isLoadingCurrentArticle);

  // Display message when loading current article
  if (isLoading) {
    return <div>Loading Article...</div>;
  } else if (!article) {
    return null;
  }
  // Render the full article
  return <FullArticle article={article} />;
};
