import React from "react";
import "./QuizResult.css";
import reponseOfQuiz from "../components/reponseOfQuiz";

function QuizResult() {
  return (
    <div className="quiz-result">
      <h2>
        Les resultats sont tombés, voici les activités que nous vous proposons :
      </h2>
      <p>{reponseOfQuiz}</p>
    </div>
  );
}

export default QuizResult;
