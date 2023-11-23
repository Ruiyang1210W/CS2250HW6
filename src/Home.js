import React from 'react';
import coolGif from "./welcome.gif";

const Home = () => {
  return (
    <div>
      <h1>What's up Choom!</h1>
      <p>This is the home page. Explore the other sections using the navigation above.</p>
      <img src = {coolGif} alt = "Welcome"/>
    </div>
  );
};

export default Home;
