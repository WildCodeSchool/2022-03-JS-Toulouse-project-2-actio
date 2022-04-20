import React, { useState } from "react";
import "./Quiz.css";
import { NavLink } from "react-router-dom";

function Quiz() {
  const questions = [
    {
      questionText: "Dans quelle tranche d'âge vous situez vous ?",
      answerOptions: [
        { answerText: "0-20 ans ", score: 4 },
        { answerText: "20-40 ans", score: 3 },
        { answerText: "40-60 ans", score: 2 },
        { answerText: "60 ans ou plus", score: 1 },
      ],
    },
    {
      questionText: "Quel est votre niveau de pratique sportive ?",
      answerOptions: [
        { answerText: "Plus de 3 fois par semaine", score: 4 },
        { answerText: "Entre 1 et 3 fois par semaine", score: 3 },
        { answerText: "Moins d'une fois par semaine", score: 2 },
        { answerText: "Moins d'une fois par mois", score: 1 },
      ],
    },
    {
      questionText: "Vous êtes plutôt sport collectif ou sport individuel ?",
      answerOptions: [
        { answerText: "Sport collectif", score: 4 },
        { answerText: "Sport individuel", score: 3 },
        { answerText: "Autant l'un que l'autre", score: 2 },
        { answerText: "Je n'aime pas le sport", score: 1 },
      ],
    },
    {
      questionText: "Quelle type d'activité vous plaît le plus ?",
      answerOptions: [
        { answerText: "Activité de glisse ", score: 4 },
        { answerText: "Sport de balles ", score: 3 },
        { answerText: "Activité en salle", score: 2 },
        { answerText: "Activité contemplative", score: 1 },
      ],
    },
  ];
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const handleAnswerButtonClick = (answerOption) => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    setScore(questions[currentQuestion].answerOptions.score);
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setCurrentQuestion(3);
    }
  };

  return (
    <div className="quiz-container">
      <h2>{questions[currentQuestion].questionText}</h2>
      <div className="answer-section">
        {questions[currentQuestion].answerOptions.map((answerOption) => (
          <button type="button" onClick={() => handleAnswerButtonClick()}>
            {answerOption.answerText}
          </button>
        ))}
      </div>
      <div className="show-score">Votre score est : {score}</div>

      <button type="button" className="quiz-result-button">
        <NavLink className="quiz-result-link" to="/QuizResult">
          Voir les activités proposées
        </NavLink>
      </button>
    </div>
  );
}

export default Quiz;
