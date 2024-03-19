import React from 'react';
import Article from './article';

function ArticleList({ articles, loading, selectedSubreddit }) {
  return (
    <>
      <h2>Articulos de: {selectedSubreddit ? `r/${selectedSubreddit}` : 'Reddit'}:</h2>
      {loading && <p>Cargando...</p>}
      {!loading && selectedSubreddit && articles.length > 0 &&
        articles.map((article, index) => <Article key={index} article={article.data} />)
      }
      {!loading && selectedSubreddit && articles.length === 0 &&
        <p>No se encontraron artículos para este subreddit.</p>
      }
    </>
  );
}

export default ArticleList;
