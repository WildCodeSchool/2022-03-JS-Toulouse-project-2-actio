import React from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import * as L from "leaflet";
import iconImage from "../assets/marker.png";
import "./Map.css";

//  Create the icon constructor
const LeafIcon = L.Icon.extend({
  options: {},
});

// Create the icon with the new image
const icon = new LeafIcon({
  iconUrl: iconImage,
  iconSize: [30, 30],
});

function Map() {
  return (
    <div className="Map">
      <MapContainer center={[43.604652, 1.444209]} zoom={13}>
        {/* Add the className map-tiles to style the map in dark */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
        />
        {/* By default, add a marker on the map centered on Toulouse lat & long with a popup redirecting to the homepage */}
        <Marker position={[43.604652, 1.444209]} icon={icon}>
          <Popup>
            Bougez avec Actio ! <br /> <Link to="/">Home</Link>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
