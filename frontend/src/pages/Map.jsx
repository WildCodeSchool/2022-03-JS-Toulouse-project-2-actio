import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import LocationMarker from "../components/LocationMarker";
import FilterMenu from "../components/FilterMenu";
import PascalCase from "../components/PascalCase";
import Icon from "../components/Icon";
import "./Map.css";

function Map() {
  const [sportSelected, setSportSelected] = useState("");
  const [sportInfo, setSportInfo] = useState([]);

  const getLocation = () => {
    switch (sportSelected) {
      case "tennis":
        axios
          .get(
            "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=courts-de-tennis&q=&rows=50"
          )
          .then((response) =>
            setSportInfo(
              response.data.records.map((el) => ({
                name: `Court de tennis ${el.fields.index}`,
                coord: el.fields.geo_point_2d,
                key: el.recordid,
              }))
            )
          );
        break;
      case "patinage":
        axios
          .get(
            "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=patinoires&q="
          )
          .then((response) =>
            setSportInfo(
              response.data.records.map((el) => ({
                name: `${PascalCase(el.fields.nom_complet)} | ${
                  el.fields.telephone
                } | ${el.fields.adresse}`,
                coord: el.fields.geo_point_2d,
                key: el.recordid,
              }))
            )
          );
        break;
      case "skate":
        axios
          .get(
            "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=skate-parcs&q="
          )
          .then((response) =>
            setSportInfo(
              response.data.records.map((el) => ({
                name: `Skatepark ${el.fields.index}`,
                coord: el.fields.geo_point_2d,
                key: el.recordid,
              }))
            )
          );
        break;
      case "natation":
        axios
          .get(
            "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=piscines&q=&rows=20"
          )
          .then((response) =>
            setSportInfo(
              response.data.records.map((el) => ({
                name: `Piscine ${el.fields.index} | ${el.fields.telephone} | ${el.fields.adresse}`,
                coord: el.fields.geo_point_2d,
                key: el.recordid,
              }))
            )
          );
        break;
      case "petanque":
        axios
          .get(
            "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=boulodromes&q=&rows=100"
          )
          .then((response) =>
            setSportInfo(
              response.data.records.map((el) => ({
                name: `Boulodrome ${el.fields.index}`,
                coord: el.fields.geo_point_2d,
                key: el.recordid,
              }))
            )
          );
        break;
      case "fitness":
        axios
          .get(
            "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=site-communal-dimplantation-de-fitness&q=&rows=50"
          )
          .then((response) =>
            setSportInfo(
              response.data.records.map((el) => ({
                name: `Module de fitness ${PascalCase(el.fields.site)}`,
                coord: el.fields.geo_point_2d,
                key: el.recordid,
              }))
            )
          );
        break;
      case "football":
        axios
          .get(
            "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=stades&q=&rows=50"
          )
          .then((response) =>
            setSportInfo(
              response.data.records
                .filter((el) => el.fields.foot === "O")
                .map((el) => ({
                  name: `Terrain de football ${el.fields.index}`,
                  coord: el.fields.geo_point_2d,
                  key: el.recordid,
                }))
            )
          );
        break;
      case "rugby":
        axios
          .get(
            "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=stades&q=&rows=50"
          )
          .then((response) =>
            setSportInfo(
              response.data.records
                .filter((el) => el.fields.rugby === "O")
                .map((el) => ({
                  name: `Terrain de rugby ${el.fields.index}`,
                  coord: el.fields.geo_point_2d,
                  key: el.recordid,
                }))
            )
          );
        break;
      case "volley-ball":
      case "handball":
      case "basket-ball":
        axios
          .get(
            "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=gymnases&q=&rows=50"
          )
          .then((response) =>
            setSportInfo(
              response.data.records.map((el) => ({
                name: `Gymnase ${el.fields.index}`,
                coord: el.fields.geo_point_2d,
                key: el.recordid,
              }))
            )
          );
        break;
      default:
        setSportInfo([
          {
            name: "Toulouse",
            coord: [43.604652, 1.444209],
            key: "1",
          },
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
        {sportInfo.map((el) => (
          <Marker key={el.key} position={el.coord} icon={Icon}>
            <Popup>{el.name}</Popup>
          </Marker>
        ))}
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default Map;
