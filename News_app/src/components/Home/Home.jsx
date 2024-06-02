// src/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2f4b3a90bc2f4fc2b9d0590cab2faa11');
        setNews(response.data.articles);
      } catch (error) {
        setError('Failed to fetch news. Please try again later.');
      }
    };

    fetchNews();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="news-container">
      <h2 style={{backgroundColor:'black',color:'white'}}>Latest News</h2>
      <div className="news-grid">
        {news.slice(0, 10).map((article, index) => (
          <div key={index} className="news-card">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <h3>{article.title}</h3>
            </a>
            {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
