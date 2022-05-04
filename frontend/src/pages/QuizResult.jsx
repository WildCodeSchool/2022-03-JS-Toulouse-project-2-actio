import React from "react";
import { NavLink } from "react-router-dom";
import SuggestedSport from "../components/SuggestedSport";
import "./QuizResult.css";

function QuizResult() {
  return (
    <div className="quiz-result">
      <h2>
        Les resultats sont tombés, voici les activités que nous vous proposons :
      </h2>
      <div className="sport-container">
        <NavLink to="/map/football">
          <SuggestedSport sport="football" />
        </NavLink>
      </div>
    </div>
  );
}

export default QuizResult;
