import React from "react";

export const FullArticle = ({ article }) => {
  return (
    <div className="article-full-container">
      <div className="article-full-image-container">
        <img src={article.image} alt="" />
      </div>
      <div className="current-article-container" key={article.id}>
        <h1 className="current-article-title">{article.title}</h1>
        <div className="text-container">{article.fullText}</div>
        <div className="article-personality">
          <img src={article.image1} alt="" />
          <div className="text-container">{article.personality1}</div>
        </div>
        <div className="article-personality">
          <div className="text-container">{article.personality2}</div>
          <img src={article.image2} alt="" />
        </div>
        <div className="text-container">{article.personality3}</div>
      </div>
    </div>
  );
};
