import React from "react";
import pascalCase from "./pascalCase";
import "./SuggestedSport.css";

function SuggestedSport(props) {
  const { sport } = props;

  const iconSport = {
    basketball: "/src/assets/icon-basketball.png",
    fitness: "/src/assets/icon-fitness.png",
    football: "/src/assets/icon-football.png",
    handball: "/src/assets/icon-handball.png",
    natation: "/src/assets/icon-natation.png",
    patinage: "/src/assets/icon-patinage.png",
    petanque: "/src/assets/icon-petanque.png",
    rugby: "/src/assets/icon-rugby.png",
    skate: "/src/assets/icon-skate.png",
    tennis: "/src/assets/icon-tennis.png",
    volleyball: "/src/assets/icon-volleyball.png",
    apero: "/src/assets/chope-a-biere.png",
  };
  return (
    <div className="SuggestedSport">
      <img src={iconSport[sport]} alt={`icone ${sport}`} />
      <p>{pascalCase(sport)}</p>
    </div>
  );
}

export default SuggestedSport;
