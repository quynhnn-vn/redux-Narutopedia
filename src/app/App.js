import React from "react";
import "./App.css";
import { CurrentArticle } from "../features/currentArticle/CurrentArticle";
import { Comments } from "../features/comments/Comments";
import { ArticlePreviews } from "../features/articlePreviews/ArticlePreviews";

const App = () => {
  return (
    <div className="App">
      <header className="App-header" />
      <main>
        <CurrentArticle />
        <Comments />
        <ArticlePreviews />
      </main>
    </div>
  );
};
export default App;
