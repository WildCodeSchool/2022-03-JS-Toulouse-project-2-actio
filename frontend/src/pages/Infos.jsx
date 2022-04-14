import React from "react";
import "./Infos.css";

function Infos() {
  const props = {
    locationName: "PATINOIRE BELLEVUE",
    address: "69ter route de Narbonne 31000 TOULOUSE",
    phone: "05 61 52 93 53",
    location: "",
  };

  return (
    <div className="Infos">
      <img
        src="/src/assets/patinoire.jpeg"
        alt="patinoire"
        className="chosenSport-picture"
      />

      <div className="location-name">
        <h1 className="name">
          <strong>{props.locationName}</strong>
        </h1>
        <p className="description">Infrastructures de sports et loisirs</p>
      </div>

      <div className="location-infos">
        <div className="location-details">
          <img
            src="/src/assets/location icone.svg"
            alt="icone de localisation"
          />
          <p>{props.address}</p>
        </div>

        <div className="phone-details">
          <img
            src="/src/assets/phone icone.svg"
            alt="icone de téléphone"
            className="phone-icone"
          />
          <p>{props.phone}</p>
        </div>

        <div className="fas web-icone fa-xs">
          <img
            src="/src/assets/web icone.svg"
            alt="icone de web"
            className="web-icone"
          />
          <p>non disponible</p>
        </div>
      </div>

      <div className="map">
        <div>[carte]</div>
      </div>

      <div className="exit-acess">
        <a href="/">Retour au quiz</a>
        <a href="/">Retour à la carte</a>
      </div>
    </div>
  );
}

export default Infos;
