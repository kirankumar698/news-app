import React, { useEffect, useState } from "react";

const API_KEY = "YOUR_NEWSAPI_KEY"; // Replace with your API key
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const App = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">World News</h1>
      {loading ? (
        <p className="text-center">Loading news...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article, index) => (
            <div key={index} className="bg-white p-4 shadow rounded-lg">
              <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover rounded-md" />
              <h2 className="text-lg font-semibold mt-3">{article.title}</h2>
              <p className="text-gray-600 mt-2">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 text-blue-500 hover:underline"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
