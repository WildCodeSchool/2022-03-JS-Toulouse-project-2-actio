import React from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import FilterMenu from "../components/FilterMenu";
import Icon from "../components/Icon";
import "./Map.css";

function Map() {
  return (
    <div className="Map">
      <FilterMenu />
      <MapContainer center={[43.604652, 1.444209]} zoom={13}>
        {/* Add the className map-tiles to style the map in dark */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
        />
        {/* By default, add a marker on the map centered on Toulouse lat & long with a popup redirecting to the homepage */}
        <Marker position={[43.604652, 1.444209]} icon={Icon}>
          <Popup>
            Bougez avec Actio ! <br /> <Link to="/">Home</Link>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
