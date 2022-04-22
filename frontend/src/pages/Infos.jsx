import React, { useState } from "react";
import "./Infos.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import axios from "axios";

function Infos({ locationName, phone, coordonnees }) {
  /* const [selectedLocation, setSelectedLocation] = useState(""); */
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
      <div className="chosenSport-picture" />

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
            <p>{phone}</p>
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
