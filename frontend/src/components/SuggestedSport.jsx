import React from "react";
import pascalCase from "./pascalCase";
import "./SuggestedSport.css";

import basketball from "../assets/icon-basketball.png";
import fitness from "../assets/icon-fitness.png";
import football from "../assets/icon-football.png";
import handball from "../assets/icon-handball.png";
import natation from "../assets/icon-natation.png";
import patinage from "../assets/icon-patinage.png";
import petanque from "../assets/icon-petanque.png";
import rugby from "../assets/icon-rugby.png";
import skate from "../assets/icon-skate.png";
import tennis from "../assets/icon-tennis.png";
import volleyball from "../assets/icon-volleyball.png";
import apero from "../assets/chope-a-biere.png";

function SuggestedSport(props) {
  const { sport } = props;

  const iconSport = {
    basketball,
    fitness,
    football,
    handball,
    natation,
    patinage,
    petanque,
    rugby,
    skate,
    tennis,
    volleyball,
    apero,
  };
  return (
    <div className="SuggestedSport">
      <img src={iconSport[sport]} alt={`icone ${sport}`} />
      <p>{pascalCase(sport)}</p>
    </div>
  );
}

export default SuggestedSport;
