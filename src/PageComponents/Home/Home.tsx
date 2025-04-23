import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="title">Hangman</div>
      <div className="linkContainer">
        <Link className="link" to="/hangman">
          Enter
        </Link>
      </div>
    </div>
  );
};
