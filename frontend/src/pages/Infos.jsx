import React, { useState } from "react";
import "./Infos.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import axios from "axios";

function changeSportPicture(typeOfSport) {
  if (typeOfSport === "basket-ball") {
    return <img src="/src/assets/basket.jpg" alt="terrain de basket" />;
  }
  if (typeOfSport === "tennis") {
    return <img src="/src/assets/tennis.jpg" alt="terrain de tennis" />;
  }
  if (typeOfSport === "patinage") {
    return <img src="/src/assets/patinoire.jpeg" alt="patinoire" />;
  }
  if (typeOfSport === "skate") {
    return <img src="/src/assets/skatepark.jpg" alt="skatepark" />;
  }
  if (typeOfSport === "petanque") {
    return <img src="/src/assets/pétanque.jpg" alt="terrain de petanque" />;
  }
  if (typeOfSport === "fitness") {
    return <img src="/src/assets/fitness.jpg" alt="salle de fitness" />;
  }
  if (typeOfSport === "volley-ball") {
    return (
      <img src="/src/assets/volleyball.jpg" alt="terrain de volley-ball" />
    );
  }
  if (typeOfSport === "handball") {
    return <img src="/src/assets/handball.jpg" alt="terrain de handball" />;
  }
  if (typeOfSport === "natation") {
    return <img src="/src/assets/piscine.jpg" alt="piscine" />;
  }
  if (typeOfSport === "football") {
    return <img src="/src/assets/football.jpg" alt="terrain de football" />;
  }
  if (typeOfSport === "rugby") {
    return <img src="/src/assets/rugby-post.jpg" alt="terrain de rugby" />;
  }
  return <img src="/src/assets/rugby-post.jpg" alt="terrain de rugby" />;
}

function Infos({ locationName, coordonnees, typeOfSport }) {
  const [address, setAddress] = useState("");

  axios
    .get(
      `https://api-adresse.data.gouv.fr/reverse/?lon=${coordonnees[1]}&lat=${coordonnees[0]}`
    )
    .then((response) => {
      setAddress(response.data.features[0].properties.label);
    });

  return (
    <div className="Infos">
      <div className="chosenSport-picture">
        {changeSportPicture(typeOfSport)}
      </div>

      <div className="desktop-right">
        <div className="location-name">
          <h1 className="name">
            <strong>{locationName}</strong>
          </h1>
          <p className="description">Infrastructures de sports et loisirs</p>
        </div>

        <div className="location-infos">
          <div className="location-details">
            <img
              src="/src/assets/location-icone.svg"
              alt="icone de localisation"
            />
            <p>{address}</p>
          </div>

          <div className="phone-details">
            <img
              src="/src/assets/phone-icone.svg"
              alt="icone de téléphone"
              className="phone-icone"
            />
          </div>

          <div className="fas web-icone fa-xs">
            <img
              src="/src/assets/web-icone.svg"
              alt="icone de web"
              className="web-icone"
            />
            <p>non disponible</p>
          </div>
        </div>

        <div className="map">
          <MapContainer center={coordonnees} zoom={13}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              className="map-tiles"
            />
            <Marker position={coordonnees} />
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default Infos;
