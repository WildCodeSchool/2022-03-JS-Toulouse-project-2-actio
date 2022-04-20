import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import LocationMarker from "../components/LocationMarker";
import FilterMenu from "../components/FilterMenu";
import Icon from "../components/Icon";
import "./Map.css";

function Map() {
  const [sportSelected, setSportSelected] = useState("");
  const [sportLocations, setSportLocations] = useState([]);

  const getLocation = () => {
    switch (sportSelected) {
      case "tennis":
        axios
          .get(
            "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=courts-de-tennis&q=&rows=50"
          )
          .then((response) => setSportLocations(response.data.records));
        break;
      case "patinage":
        axios
          .get(
            "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=patinoires&q="
          )
          .then((response) => setSportLocations(response.data.records));
        break;
      case "skate":
        axios
          .get(
            "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=skate-parcs&q="
          )
          .then((response) => setSportLocations(response.data.records));
        break;
      case "natation":
        axios
          .get(
            "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=piscines&q=&rows=20"
          )
          .then((response) => setSportLocations(response.data.records));
        break;
      case "petanque":
        axios
          .get(
            "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=boulodromes&q=&rows=100"
          )
          .then((response) => setSportLocations(response.data.records));
        break;
      case "fitness":
        axios
          .get(
            "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=site-communal-dimplantation-de-fitness&q=&rows=50"
          )
          .then((response) => setSportLocations(response.data.records));
        break;
      case "football":
        axios
          .get(
            "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=stades&q=&rows=50"
          )
          .then((response) =>
            setSportLocations(
              response.data.records.filter(
                (location) => location.fields.foot === "O"
              )
            )
          );
        break;
      case "rugby":
        axios
          .get(
            "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=stades&q=&rows=50"
          )
          .then((response) =>
            setSportLocations(
              response.data.records.filter(
                (location) => location.fields.rugby === "O"
              )
            )
          );
        break;
      case "volley-ball":
      case "handball":
        axios
          .get(
            "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=gymnases&q=&rows=50"
          )
          .then((response) => setSportLocations(response.data.records));
        break;
      default:
        setSportLocations([
          { fields: { geo_point_2d: [43.604652, 1.444209] }, recordid: "1" },
        ]);
        break;
    }
  };

  useEffect(() => {
    getLocation();
  }, [sportSelected]);

  return (
    <div className="Map">
      <FilterMenu setSportSelected={setSportSelected} />
      <MapContainer center={[43.604652, 1.444209]} zoom={13}>
        {/* Add the className map-tiles to style the map in dark */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
        />
        {/* Once we get the different locations from the API display marker on the map */}
        {sportLocations.map((location) => (
          <Marker
            key={location.recordid}
            position={location.fields.geo_point_2d}
            icon={Icon}
          >
            <Popup>
              {location.fields.telephone} | {location.fields.nom_complet} |{" "}
              {location.fields.adresse}
            </Popup>
          </Marker>
        ))}
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default Map;
