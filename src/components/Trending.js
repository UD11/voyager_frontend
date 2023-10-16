import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { USER_POST_QUERY } from '../graphql';
import { GET_TOP_PDFS } from '../graphql';

const TrendingArticles = () => {
  const { loading, error, data } = useQuery(GET_TOP_PDFS);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (!loading && data) {
      setArticles(data.topPdfs);
    }
  }, [loading, data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error 😦 </p>;

  const ArticleCard = ({ article }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
          <p
            className="text-sm text-black mb-4 line-clamp-2" // Use line-clamp to limit to 2 lines
            dangerouslySetInnerHTML={{ __html: article.description }}
          />
          <p className="text-gray-600 mt-2">Institution: {article.institutionName}</p>
          <p className="text-gray-600 mt-2">Author: {article.author}</p>
          <a href={article.link} className="text-blue-500 hover:underline mt-2 block">
            Read more
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Trending Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default TrendingArticles;