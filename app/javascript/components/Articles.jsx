const apiKey = "3a08b62d7bfd4cf295f119025ba8a850";
import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import Article from "./Article";
import axios from "axios";

function Articles() {
  const [remoteArticles, setRemoteArticles] = useState([]);
  const [localArticles, setLocalArticles] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/everything?q=watches&apiKey=${apiKey}`)
      .then((resp) => {
        setRemoteArticles(resp.data.articles);
      })
      .catch((err) => {
        setRemoteArticles([]);
        console.log("Error :>> ", err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/articles.json")
      .then((resp) => {
        setLocalArticles(resp.data);
      })
      .catch((err) => {
        setLocalArticles([]);
        console.log("Error :>> ", err);
      });
  }, []);

  useEffect(() => {
    let tempLocal = [];
    localArticles.forEach((article) => {
      tempLocal.push(
        Object.assign(
          {
            publishedAt: article.created_at,
            urlToImage: article.image,
            description: article.content,
            target: "local",
          },
          article
        )
      );
    });
    setArticles(() => [...remoteArticles, ...tempLocal]);
    setloading(false);
  }, [remoteArticles, localArticles]);

  const sortedArticles = useMemo(() => {
    return articles.sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1));
  }, [articles]);

  return (
    <div>
      {loading ? (
        <div>
          <p className="h5 text-dark text-center">Fetching something great!</p>
        </div>
      ) : (
        <div>
          {sortedArticles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}

Articles.propTypes = {
  localArticles: PropTypes.array,
};

Articles.defaultProps = {
  name: [],
};

export default Articles;
