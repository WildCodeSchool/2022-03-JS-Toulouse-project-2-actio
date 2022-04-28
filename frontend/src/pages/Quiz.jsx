/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Quiz.css";
import { Navigate, Route, Routes } from "react-router-dom";
import question from "../components/question";
import reponseOfQuiz from "../components/reponseOfQuiz";
import QuizResult from "./QuizResult";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answer, setAnswer] = useState("");
  const [tableOfResult, setTableOfResult] = useState([]);
  const [disable, setDisable] = useState(false);
  const handleAnswerButtonClick = (event) => {
    setAnswer(event.target.value);
    setTableOfResult([...tableOfResult, event.target.value]);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < question.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setCurrentQuestion(currentQuestion);
      setShowResult(true);
      const response = reponseOfQuiz([...tableOfResult, event.target.value]);
      setDisable(true);
    }
  };

  const handleReturnButtonCLick = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setDisable(false);
    }
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
        <div>
          <p className="tableResult">{tableOfResult}</p>
        </div>
        <div>
          <button
            type="button"
            className="quiz-return-button"
            onClick={() => handleReturnButtonCLick()}
          >
            Retour en arrière
          </button>
        </div>
      </div>
      <div className="show-result">
        {showResult ? (
          <button type="button">Voir les activités proposées</button>
        ) : (
          <p />
        )}
      </div>
    </div>
  );
}

export default Quiz;
