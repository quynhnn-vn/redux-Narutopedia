import React from "react";
import "./App.css";
import { CurrentArticle } from "../features/currentArticle/CurrentArticle";
import { Comments } from "../features/comments/Comments";
import { ArticlePreviews } from "../features/articlePreviews/ArticlePreviews";

const App = () => {
  return (
    <div className="App">
      <header>
        <img src="./pics/logo.png" alt="logo" />
        <span>Narutopedia</span>
      </header>
      <main>
        <CurrentArticle />
        <Comments />
        <ArticlePreviews />
      </main>
      <footer>
          Copyright
          <img src="./pics/copyright.png" alt="" />
          <a href="https://naruto.fandom.com/wiki/Narutopedia">Naruto Fandom</a>
      </footer>
    </div>
  );
};
export default App;
