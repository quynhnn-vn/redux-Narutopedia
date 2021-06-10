import React from "react";

export const FullArticle = ({ article }) => {
  return (
    <>
      <div className="article-full-image-container">
        <img src={article.image} alt="" />
      </div>
      <div className="current-article-container" key={article.id}>
        <h1 className="current-article-title">{article.title}</h1>
        <div className="article-full-text">{article.fullText}</div>
      </div>
    </>
  );
}