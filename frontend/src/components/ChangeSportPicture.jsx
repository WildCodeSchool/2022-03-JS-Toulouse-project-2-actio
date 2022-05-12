import tennis from "../assets/tennis.jpg";
import patinoire from "../assets/patinoire.jpeg";
import skatepark from "../assets/skatepark.jpg";
import petanque from "../assets/petanque.jpg";
import fitness from "../assets/fitness2.jpg";
import handball from "../assets/handball.jpg";
import piscine from "../assets/piscine.jpg";
import football from "../assets/football.jpg";
import rugby from "../assets/rugby-post.jpg";
import apero from "../assets/bar-toulouse2.jpg";
import projecteur from "../assets/projecteur.jpg";

export default function ChangeSportPicture(typeOfSport) {
  if (typeOfSport === "tennis") {
    return (
      <img
        className="chosenSport-picture"
        src={tennis}
        alt="terrain de tennis"
      />
    );
  }
  if (typeOfSport === "patinage") {
    return (
      <img className="chosenSport-picture" src={patinoire} alt="patinoire" />
    );
  }
  if (typeOfSport === "skate") {
    return (
      <img className="chosenSport-picture" src={skatepark} alt="skatepark" />
    );
  }
  if (typeOfSport === "petanque") {
    return (
      <img
        className="chosenSport-picture"
        src={petanque}
        alt="terrain de petanque"
      />
    );
  }
  if (typeOfSport === "fitness") {
    return (
      <img
        className="chosenSport-picture"
        src={fitness}
        alt="salle de fitness"
      />
    );
  }
  if (typeOfSport === "gymnase") {
    return (
      <img
        className="chosenSport-picture"
        src={handball}
        alt="terrain de handball"
      />
    );
  }
  if (typeOfSport === "natation") {
    return <img className="chosenSport-picture" src={piscine} alt="piscine" />;
  }
  if (typeOfSport === "football") {
    return (
      <img
        className="chosenSport-picture"
        src={football}
        alt="terrain de football"
      />
    );
  }
  if (typeOfSport === "rugby") {
    return <img className="chosenSport-picture" src={rugby} alt="rugby" />;
  }
  if (typeOfSport === "apero") {
    return (
      <img className="chosenSport-picture" src={apero} alt="bar de Toulouse" />
    );
  }
  return (
    <img className="chosenSport-picture" src={projecteur} alt="projecteur" />
  );
}
