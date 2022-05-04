/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Quiz.css";
import { NavLink } from "react-router-dom";
import question from "../components/question";
import reponseOfQuiz from "../components/reponseOfQuiz";
import QuizResult from "./QuizResult";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answer, setAnswer] = useState("");
  const [tableOfResult, setTableOfResult] = useState([]);
  const [disable, setDisable] = useState(false);
  const [sportResultStringed, setSportResultStringed] = useState("");
  const handleAnswerButtonClick = (event) => {
    setAnswer(event.target.value);
    setTableOfResult([...tableOfResult, event.target.value]);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < question.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setCurrentQuestion(currentQuestion);
      setShowResult(true);
      const sportResult = reponseOfQuiz([...tableOfResult, event.target.value]);
      setDisable(true);
      setSportResultStringed(JSON.stringify(sportResult));
    }
  };

  const handleReturnButtonCLick = () => {
    setCurrentQuestion(0);
    setDisable(false);
    setTableOfResult([]);
  };

  return (
    <div className="quiz-container">
      <h2>{question[currentQuestion].questionText}</h2>
      <div className="answer-section">
        {question[currentQuestion].answerOptions.map((answerOption) => (
          <button
            disabled={disable}
            type="button"
            value={answerOption.answerText}
            onClick={(event) => handleAnswerButtonClick(event)}
          >
            {answerOption.answerText}
          </button>
        ))}
      </div>
      <div className="quiz-return">
        <button type="button" onClick={() => handleReturnButtonCLick()}>
          Recommencer le quiz
        </button>
      </div>
      <div className="show-result">
        {showResult ? (
          <button type="button" className="quiz-result-button">
            <NavLink
              className="quiz-result-link"
              to={`/QuizResult/${sportResultStringed}`}
            >
              Voir les activités proposées
            </NavLink>
          </button>
        ) : (
          <p />
        )}
      </div>
    </div>
  );
}

export default Quiz;
