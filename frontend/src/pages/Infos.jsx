import React from "react";
import "./Infos.css";

function Infos() {
  /* const sportLocation = {
    locationName: "",
    address: "",
    phone: "",
    location: "", 
  }; */

  return (
    <div className="Infos">
      <img
        src="/src/assets/patinoire.jpeg"
        alt="patinoire"
        className="chosenSport-picture"
      />

      <div className="location-name">
        <h1>
          <strong>location name</strong>
        </h1>
        <p>description</p>
      </div>

      <div>
        <div className="location-infos">
          <img
            src="/src/assets/location icone.png"
            alt="icone de localisation"
            className="location-icone"
          />
          <h2>address</h2>
        </div>

        <div>
          <img
            src="/src/assets/picto phone.jpeg"
            alt="icone de téléphone"
            className="address-icone"
          />
          <h2>phone</h2>
        </div>

        <div>
          <img
            src="/src/assets/web icone.png"
            alt="icone de web"
            className="phone-icone"
          />
          <h2>email</h2>
        </div>
      </div>

      <div>
        <h2>géolocalisation</h2>
        <div>carte</div>
      </div>

      <div className="exit-acess">
        <a href="/">Retour au quiz</a>
        <a href="/">Retour à la carte</a>
      </div>
    </div>
  );
}

export default Infos;
