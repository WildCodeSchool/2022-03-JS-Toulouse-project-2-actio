import { Link } from "react-router-dom";
import React from "react";

function QuizResult() {
  return (
    <div>
      <Link to="/Quiz">Quiz</Link>
      <Link to="/Map">Map</Link>

      <p>Hello on the quizResult page</p>
    </div>
  );
}

export default QuizResult;
