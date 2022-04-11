import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.css";

function Map() {
  return (
    <div className="Map">
      <MapContainer center={[43.604652, 1.444209]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
        />
      </MapContainer>
    </div>
  );
}

export default Map;
