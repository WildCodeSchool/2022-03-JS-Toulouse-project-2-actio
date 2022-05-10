import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import Icon from "./Icon";
import "./SportCard.css";
import distance from "./distance";

export default function SportCard(props) {
  const { title, coord, position } = props;

  const displayDistance = distance(
    position.lat,
    position.lng,
    coord[0],
    coord[1]
  ).toFixed(1);

  return (
    <div className="SportCard">
      <div className="SportCard__mini-map">
        <MapContainer className="SportCard__map" center={coord} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            className="map-tiles"
          />
          <Marker position={coord} icon={Icon} />
        </MapContainer>
      </div>
      <div className="SportCard__info">
        <h1>{title}</h1>
        <p>{displayDistance} Km</p>
      </div>
    </div>
  );
}
