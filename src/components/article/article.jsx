import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAriticle } from "../../services/service";
import "../element.css";
import SkeletonArticle from "../skeleton/skeletonArticle";
const Article = () => {
  const [articles, setArticle] = useState();
  const handleGetArticles = async () => {
    const articleslist = await getAriticle();
    setArticle(articleslist.slice(0, 10));
  };
  useEffect(() => {
    setTimeout(() => {
      handleGetArticles();
    }, 3000);
  }, []);
  return (
    <div className="article-wrapper">
      <div>
        <h2>Article</h2>
        <hr />
      </div>

      {articles
        ? articles.map((article) => (
            <div key={article.id} className="article">
              <h3>{article.title}</h3>
              <p>{article.body}</p>
            </div>
          ))
        : [1, 2, 3, 4, 5, 6, 7].map(() => <SkeletonArticle />)}
    </div>
  );
};

export default Article;
