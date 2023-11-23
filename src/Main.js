import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import TranslateApp from "./TranslateApp";
import Home from "./Home";
import RedditMemes from "./RedditMemes";

const Main = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tic-tac-toe">Tic-Tac-Toe</Link>
            </li>
            <li>
              <Link to="/translate">Translate</Link>
            </li>
            <li>
              <Link to="/reddit-memes">Reddit Memes</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/tic-tac-toe" element={<App />} />
          <Route path="/translate" element={<TranslateApp />} />
          <Route path="/reddit-memes" element={<RedditMemes />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Main;
