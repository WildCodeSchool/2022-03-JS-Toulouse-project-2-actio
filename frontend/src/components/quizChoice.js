import question from "./question";
import sports from "./sports";

const quizChoice = () => {
  if (answer === "Homme" || answer === "Femme") {
    setCurrentQuestion(question[1]);
  }
  if (answer === "15-30 ans") {
    setCurrentQuestion(question[2]);
  }
  if (
    answer === "Plus de 3 fois par semaine" ||
    answer === "Entre 1 et 3 fois par semaine" ||
    answer === "Moins d'une fois par semaine" ||
    answer === "Moins d'une fois par semaine" ||
    answer === "Moins d'une fois par mois"
  ) {
    setCurrentQuestion(question[3]);
  }
  if (answer === "Sport collectif") {
    setCurrentQuestion(question[5]);
  }
  if (answer === "Oui") {
    return sports.filter(
      (el) =>
        el === "rugby" || el === "foot" || el === "handball" || el === "basket"
    );
  }
};

export default quizChoice;
