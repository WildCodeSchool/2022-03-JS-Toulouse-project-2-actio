import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <body className="home">
      <h1 className="home__text">
        Tu veux faire du sport, mais tu ne sais pas lequel ? Réponds au quiz !
      </h1>
      <div className="home__buttons">
        <NavLink className="home__link home__link--quiz" to="/quiz">
          Quiz
        </NavLink>
        <NavLink className="home__link home__link--map" to="/map">
          Accéder à la carte
        </NavLink>
      </div>
    </body>
  );
}
