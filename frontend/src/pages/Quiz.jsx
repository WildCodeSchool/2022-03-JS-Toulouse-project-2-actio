import React, { useState } from "react";
import "./Quiz.css";
import { NavLink } from "react-router-dom";
import question from "../components/question";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answer, setAnswer] = useState("");
  const handleAnswerButtonClick = (event) => {
    setAnswer(event.target.value);
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(currentQuestion + 1);
    if (nextQuestion < question.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setCurrentQuestion(currentQuestion);
      setShowResult(true);
    }
  };
  const handleReturnButtonCLick = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowResult(false);
    }
  };

  return (
    <div className="quiz-container">
      <h2>{question[currentQuestion].questionText}</h2>
      <div className="answer-section">
        {question[currentQuestion].answerOptions.map((answerOption) => (
          <button
            type="button"
            value={answerOption.answerText}
            onClick={(event) => handleAnswerButtonClick(event)}
          >
            {answerOption.answerText}
          </button>
        ))}
        <div>
          <p className="current-answer">{answer}</p>
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
      <div className="show-result-button">
        {showResult ? (
          <button type="button" className="quiz-result-button">
            <NavLink className="quiz-result-link" to="/QuizResult">
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
