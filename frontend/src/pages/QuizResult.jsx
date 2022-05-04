import React from "react";
import { NavLink, useParams } from "react-router-dom";
import SuggestedSport from "../components/SuggestedSport";
import "./QuizResult.css";

function QuizResult() {
  const { result } = useParams();
  const parsedSports = JSON.parse(result);

  return (
    <div className="quiz-result">
      <h2>
        Les resultats sont tombés, voici les activités que nous te proposons :
      </h2>
      <div className="sport-container">
        {parsedSports.map((sport) => (
          <NavLink className="navlink-sport" to={`/map/${sport}`}>
            <SuggestedSport sport={`${sport}`} />
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default QuizResult;
