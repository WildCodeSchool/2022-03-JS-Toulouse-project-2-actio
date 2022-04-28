import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import LocationMarker from "../components/LocationMarker";
import SwitchMapListFilter from "../components/SwitchMapListFilter";
import FilterMenu from "../components/FilterMenu";
import Slider from "../components/Slider";
import pascalCase from "../components/pascalCase";
import distance from "../components/distance";
import Icon from "../components/Icon";
import "./Map.css";

function Map() {
  // sportSelected is to know which sport has been selected by the user using the filter
  const [sportSelected, setSportSelected] = useState("");

  // sportInfos are the data that we retrieve from the APIs (coordinates & name of the place)
  const [sportInfos, setSportInfos] = useState([]);

  // position corresponds to the coordinates of the user. We initialize it with the coordinates of Toulouse
  const [position, setPosition] = useState({ lat: 43.604652, lng: 1.444209 });

  const { sport } = useParams();

  useEffect(() => {
    setSportSelected(sport);
  }, []);

  const getLocation = () => {
    switch (sportSelected) {
      case "tennis":
        axios
          .get(
            "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=courts-de-tennis&q=&rows=50"
          )
          .then((response) =>
            setSportInfos(
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
            setSportInfos(
              response.data.records.map((el) => ({
                name: `${pascalCase(el.fields.nom_complet)} | ${
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
            setSportInfos(
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
            setSportInfos(
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
            setSportInfos(
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
            setSportInfos(
              response.data.records.map((el) => ({
                name: `Module de fitness ${pascalCase(el.fields.site)}`,
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
            setSportInfos(
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
            setSportInfos(
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
      case "volleyball":
      case "handball":
      case "basketball":
        axios
          .get(
            "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=gymnases&q=&rows=50"
          )
          .then((response) =>
            setSportInfos(
              response.data.records.map((el) => ({
                name: `Gymnase ${el.fields.index}`,
                coord: el.fields.geo_point_2d,
                key: el.recordid,
              }))
            )
          );
        break;
      default:
        setSportInfos([
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

  // Define a value for the slider
  const [value, setValue] = useState(2);

  // Set a radius to display markers within this radius in kilometers
  const radius = value;

  return (
    <div className="Map">
      <FilterMenu
        setSportSelected={setSportSelected}
        sportSelected={sportSelected}
      />
      <SwitchMapListFilter />
      <Slider value={value} setValue={setValue} />
      <MapContainer center={[43.604652, 1.444209]} zoom={13}>
        {/* Add the className map-tiles to style the map in dark */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
        />
        {/* Once we get the different locations from the API display marker on the map */}
        {sportInfos
          .filter(
            (sportInfo) =>
              distance(
                position.lat,
                position.lng,
                sportInfo.coord[0],
                sportInfo.coord[1]
              ) <= radius
          )
          .map((sportInfo) => (
            <Marker key={sportInfo.key} position={sportInfo.coord} icon={Icon}>
              <Popup>{sportInfo.name}</Popup>
            </Marker>
          ))}
        <LocationMarker position={position} setPosition={setPosition} />
      </MapContainer>
    </div>
  );
}

export default Map;
