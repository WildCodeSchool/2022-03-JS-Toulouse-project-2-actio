import React from "react";
import SuggestedSport from "../components/SuggestedSport";
import "./QuizResult.css";

function QuizResult() {
  return (
    <div className="quiz-result">
      <h2>
        Les resultats sont tombés, voici les activités que nous vous proposons :
      </h2>
      <div className="sport-container">
        <SuggestedSport sport="football" />
        <SuggestedSport sport="basketball" />
        <SuggestedSport sport="handball" />
        <SuggestedSport sport="petanque" />
      </div>
    </div>
  );
}

export default QuizResult;
