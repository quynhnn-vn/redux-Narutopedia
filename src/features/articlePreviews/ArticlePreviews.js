import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoadingArticlePreviews,
  loadAllPreviews,
  selectAllPreviews,
} from "./articlePreviewsSlice";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { loadCurrentArticle } from "../currentArticle/currentArticleSlice";
import { ArticleListItem } from "../../components/ArticleListItem";

export const ArticlePreviews = () => {
  const dispatch = useDispatch();
  // Retrieve article previews and loading state
  const articlePreviews = useSelector(selectAllPreviews);
  const isLoading = useSelector(isLoadingArticlePreviews);

  // Render all previews
  useEffect(() => {
    dispatch(loadAllPreviews());
  }, [dispatch]);

  // Display message when loading
  if (isLoading) {
    return (
      <div>
        <SkeletonTheme color="#222222" highlightColor="#444">
          <Skeleton count={3} />
        </SkeletonTheme>
      </div>
    );
  }
  // Jump to top of browser page when selecting an article
  const goTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <h2 className="section-title">Popular Characters</h2>
      <section className="articles-container">
        {articlePreviews.map((article) => (
          <div
            key={article.id}
            onClick={(e) => {
              dispatch(loadCurrentArticle(article.id));
              goTop();
            }}
          >
            <ArticleListItem article={article} />
          </div>
        ))}
      </section>
    </>
  );
};
