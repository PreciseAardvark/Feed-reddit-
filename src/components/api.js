export async function fetchSubreddits() {
    const response = await fetch("https://www.reddit.com/subreddits/popular.json");
    const data = await response.json();
    return data.data.children.map(child => child.data.display_name);
  }
  
  export async function fetchArticlesBySubreddit(subreddit) {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    const data = await response.json();
    return data.data.children;
  }
  