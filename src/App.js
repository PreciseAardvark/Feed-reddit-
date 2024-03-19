import React, { useState, useEffect } from 'react';
import ArticleList from './components/articleList';
import SubredditSelector from './components/subredditSelector';
import { fetchSubreddits, fetchArticlesBySubreddit } from './components/api';

function App() {
  const [articles, setArticles] = useState([]);
  const [subreddits, setSubreddits] = useState([]);
  const [selectedSubreddit, setSelectedSubreddit] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSubreddits().then(subredditList => {
      setSubreddits(subredditList);
    });
  }, []);

  const fetchArticles = () => {
    setLoading(true);
    fetchArticlesBySubreddit(selectedSubreddit).then(articlesData => {
      setArticles(articlesData);
      setLoading(false);
    });
  };

  const handleSelectSubreddit = (event) => {
    setSelectedSubreddit(event.target.value);
  };

  const handleSelectButtonClick = () => {
    fetchArticles();
  };

  return (
    <div className="App">
      <header>
        <div>
          <h2 className='title-subreddit'>Seleccionar Subreddit:</h2>
          <SubredditSelector
            subreddits={subreddits}
            selectedSubreddit={selectedSubreddit}
            handleSelectSubreddit={handleSelectSubreddit}
          />
          <button onClick={handleSelectButtonClick} disabled={!selectedSubreddit}>Consultar</button>
        </div>
      </header>
      <div className="articles">
        <ArticleList
          articles={articles}
          loading={loading}
          selectedSubreddit={selectedSubreddit}
        />
      </div>
    </div>
  );
}

export default App;
