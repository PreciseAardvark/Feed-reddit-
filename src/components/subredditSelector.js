import React from 'react';

function SubredditSelector({ subreddits, selectedSubreddit, handleSelectSubreddit }) {
  return (
    <select value={selectedSubreddit || ''} onChange={handleSelectSubreddit}>
      <option value="" disabled hidden>Selecciona un subreddit</option>
      {subreddits.map(subreddit => (
        <option key={subreddit} value={subreddit}>{subreddit}</option>
      ))}
    </select>
  );
}

export default SubredditSelector;
