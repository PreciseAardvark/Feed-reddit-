import React from 'react';

const limitWords = (text, maxWords) => {
  const words = text.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...'; 
  }
  return text;
};
function Article({ article }) {
  const base_url = "https://www.reddit.com";

  return (
    <article className="article-container">
      <div className="article-content">
        <a href={base_url + article.permalink} target="_blank" rel='noreferrer'>
          <h3>{article.title}</h3>
        </a>
        <p>{limitWords(article.selftext,20)}</p>
      </div>
      {article.thumbnail && <img src={article.thumbnail} alt='' className="article-thumbnail"></img>}
    </article>
  );
}

export default Article;
