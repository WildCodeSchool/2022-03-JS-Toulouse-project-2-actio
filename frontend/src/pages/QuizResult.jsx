import React from "react";
import "./QuizResult.css";

function QuizResult(result) {
  return (
    <div className="quiz-result">
      <h2>
        Les resultats sont tombés, voici les activités que nous vous proposons :
      </h2>
      <div>{result}</div>
    </div>
  );
}

export default QuizResult;
