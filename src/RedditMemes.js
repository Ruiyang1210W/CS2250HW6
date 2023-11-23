import React, { useState, useEffect } from "react";

const RedditMemes = () => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    const fetchMemes = async () => {
      const url = 'https://reddit-meme.p.rapidapi.com/memes/trending';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'eef4f4351dmshad269418a4761a0p175210jsn4695ee6b7138',
          'X-RapidAPI-Host': 'reddit-meme.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setMemes(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMemes();
  }, []); 

  return (
    <div className="RedditMemes">
      <h1>Trending Reddit Memes</h1>
      <h2>I am not responsible for the content</h2>
      <h2><small>which may contain: racial slurs, gender stereotypes, hell jokes</small></h2>
      <p><small>Description: An API for showing the best memes on the internet using Reddit</small></p>
      <ul>
        {memes.map((meme, index) => (
          <li key={index}>
            <img src={meme.url} alt={`Meme ${index}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RedditMemes;
