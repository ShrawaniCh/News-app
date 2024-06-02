// src/Headlines.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Headlines = () => {
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2f4b3a90bc2f4fc2b9d0590cab2faa11');
        setHeadlines(response.data.articles);
      } catch (error) {
        setError('Failed to fetch headlines. Please try again later.');
      }
    };

    fetchHeadlines();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2 style={{backgroundColor:'black',color:'white',textAlign:"center"}}>Latest Headlines</h2>
      <ul>
        {headlines.slice(0, 5).map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
            <p>Source: {article.source.name}</p>
            <p>Published At: {new Date(article.publishedAt).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Headlines;
