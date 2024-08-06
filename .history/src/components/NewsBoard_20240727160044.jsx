import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ darkMode }) => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    fetch("http://localhost:5000/api/news")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched articles:", data.articles); // Debugging log
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {articles.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsBoard;
