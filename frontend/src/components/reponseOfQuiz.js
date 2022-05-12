function reponseOfQuiz(tableOfResult) {
  let result = [];
  if (
    tableOfResult[0] === "15-50 ans" &&
    tableOfResult[1] === "Sport collectif" &&
    tableOfResult[2] === "Oui" &&
    tableOfResult[3] === "Oui"
  ) {
    result = ["skate", "rugby", "handball"];
  }
  if (
    tableOfResult[0] === "15-50 ans" &&
    tableOfResult[1] === "Sport collectif" &&
    tableOfResult[2] === "Oui" &&
    tableOfResult[3] === "Non"
  ) {
    result = ["rugby", "handball", "football"];
  }
  if (
    tableOfResult[0] === "15-50 ans" &&
    tableOfResult[1] === "Sport collectif" &&
    tableOfResult[2] === "Non" &&
    tableOfResult[3] === "Oui"
  ) {
    result = ["patinage", "skate"];
  }
  if (
    tableOfResult[0] === "15-50 ans" &&
    tableOfResult[1] === "Sport collectif" &&
    tableOfResult[2] === "Non" &&
    tableOfResult[3] === "Non"
  ) {
    result = ["volleyball", "petanque", "tennis"];
  }
  if (
    tableOfResult[0] === "15-50 ans" &&
    tableOfResult[1] === "Sport individuel" &&
    tableOfResult[2] === "Oui" &&
    tableOfResult[3] === "Oui"
  ) {
    result = ["skate", "natation", "fitness"];
  }
  if (
    tableOfResult[0] === "15-50 ans" &&
    tableOfResult[1] === "Sport individuel" &&
    tableOfResult[2] === "Oui" &&
    tableOfResult[3] === "Non"
  ) {
    result = ["fitness", "natation"];
  }
  if (
    tableOfResult[0] === "15-50 ans" &&
    tableOfResult[1] === "Sport individuel" &&
    tableOfResult[2] === "Non" &&
    tableOfResult[3] === "Oui"
  ) {
    result = ["skate", "patinage", "natation"];
  }
  if (
    tableOfResult[0] === "15-50 ans" &&
    tableOfResult[1] === "Sport individuel" &&
    tableOfResult[2] === "Non" &&
    tableOfResult[3] === "Non"
  ) {
    result = ["fitness", "natation"];
  }
  if (
    tableOfResult[0] === "50+ ans" &&
    tableOfResult[1] === "Sport collectif" &&
    tableOfResult[2] === "Oui" &&
    tableOfResult[3] === "Oui"
  ) {
    result = ["petanque", "tennis", "apero"];
  }
  if (
    tableOfResult[0] === "50+ ans" &&
    tableOfResult[1] === "Sport collectif" &&
    tableOfResult[2] === "Oui" &&
    tableOfResult[3] === "Non"
  ) {
    result = ["petanque", "football", "apero"];
  }
  if (
    tableOfResult[0] === "50+ ans" &&
    tableOfResult[1] === "Sport collectif" &&
    tableOfResult[2] === "Non" &&
    tableOfResult[3] === "Oui"
  ) {
    result = ["tennis", "patinage", "apero"];
  }
  if (
    tableOfResult[0] === "50+ ans" &&
    tableOfResult[1] === "Sport collectif" &&
    tableOfResult[2] === "Non" &&
    tableOfResult[3] === "Non"
  ) {
    result = ["tennis", "petanque", "apero"];
  }
  if (
    tableOfResult[0] === "50+ ans" &&
    tableOfResult[1] === "Sport individuel" &&
    tableOfResult[2] === "Oui" &&
    tableOfResult[3] === "Oui"
  ) {
    result = ["apero", "patinage", "natation"];
  }
  if (
    tableOfResult[0] === "50+ ans" &&
    tableOfResult[1] === "Sport individuel" &&
    tableOfResult[2] === "Oui" &&
    tableOfResult[3] === "Non"
  ) {
    result = ["fitness", "apero", "natation"];
  }
  if (
    tableOfResult[0] === "50+ ans" &&
    tableOfResult[1] === "Sport individuel" &&
    tableOfResult[2] === "Non" &&
    tableOfResult[3] === "Oui"
  ) {
    result = ["fitness", "patinage", "natation"];
  }
  if (
    tableOfResult[0] === "50+ ans" &&
    tableOfResult[1] === "Sport individuel" &&
    tableOfResult[2] === "Non" &&
    tableOfResult[3] === "Non"
  ) {
    result = ["fitness", "apero", "natation"];
  }

  return result;
}

export default reponseOfQuiz;
