import React from "react";
import "./Infos.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

function Infos({ locationName, address, phone, coordonnees }) {
  /* const props = {
     locationName: "PATINOIRE BELLEVUE",
    address: "69ter route de Narbonne 31000 TOULOUSE",
    phone: "05 61 52 93 53",
    location: [43.604652, 1.444209], 

  }; */

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
