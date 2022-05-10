export default function ChangeSportPicture(typeOfSport) {
  if (typeOfSport === "tennis") {
    return (
      <img
        className="chosenSport-picture"
        src="/src/assets/tennis.jpg"
        alt="terrain de tennis"
      />
    );
  }
  if (typeOfSport === "patinage") {
    return (
      <img
        className="chosenSport-picture"
        src="/src/assets/patinoire.jpeg"
        alt="patinoire"
      />
    );
  }
  if (typeOfSport === "skate") {
    return (
      <img
        className="chosenSport-picture"
        src="/src/assets/skatepark.jpg"
        alt="skatepark"
      />
    );
  }
  if (typeOfSport === "petanque") {
    return (
      <img
        className="chosenSport-picture"
        src="/src/assets/pétanque.jpg"
        alt="terrain de petanque"
      />
    );
  }
  if (typeOfSport === "fitness") {
    return (
      <img
        className="chosenSport-picture"
        src="/src/assets/fitness2.jpg"
        alt="salle de fitness"
      />
    );
  }
  if (typeOfSport === "gymnase") {
    return (
      <img
        className="chosenSport-picture"
        src="/src/assets/handball.jpg"
        alt="terrain de handball"
      />
    );
  }
  if (typeOfSport === "natation") {
    return (
      <img
        className="chosenSport-picture"
        src="/src/assets/piscine.jpg"
        alt="piscine"
      />
    );
  }
  if (typeOfSport === "football") {
    return (
      <img
        className="chosenSport-picture"
        src="/src/assets/football.jpg"
        alt="terrain de football"
      />
    );
  }
  if (typeOfSport === "rugby") {
    return (
      <img
        className="chosenSport-picture"
        src="/src/assets/rugby-post.jpg"
        alt="rugby"
      />
    );
  }
  if (typeOfSport === "apero") {
    return (
      <img
        className="chosenSport-picture"
        src="/src/assets/bar-toulouse2.jpg"
        alt="bar de Toulouse"
      />
    );
  }
  return (
    <img
      className="chosenSport-picture"
      src="/src/assets/projecteur.jpg"
      alt="projecteur"
    />
  );
}
