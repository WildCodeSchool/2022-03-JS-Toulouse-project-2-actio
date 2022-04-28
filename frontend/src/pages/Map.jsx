import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LocationMarker from "../components/LocationMarker";
import SwitchMapListFilter from "../components/SwitchMapListFilter";
import FilterMenu from "../components/FilterMenu";
import distance from "../components/distance";
import getInfos from "../components/getInfos";
import Icon from "../components/Icon";
import "./Map.css";

function Map() {
  // Set a filterRadius to display markers within this radius in kilometers
  const filterRadius = 50;

  // sportsSelected is to know which sport has been selected by the user using the filter
  const [sportsSelected, setSportsSelected] = useState([]);

  // sportInfos are the data that we retrieve from the APIs (coordinates & name of the place)
  const [sportInfos, setSportInfos] = useState([]);

  // position corresponds to the coordinates of the user. We initialize it with the coordinates of Toulouse
  const [position, setPosition] = useState({ lat: 43.604652, lng: 1.444209 });

  // if we get a sport as an url param we set this sport to the sport selected
  const { sport } = useParams();

  useEffect(() => {
    if (sport) {
      setSportsSelected([sport]);
    }
  }, []);

  useEffect(() => {
    getInfos(sportsSelected, setSportInfos);
  }, [sportsSelected]);

  return (
    <div className="Map">
      <FilterMenu
        setSportsSelected={setSportsSelected}
        sportsSelected={sportsSelected}
      />
      <SwitchMapListFilter />
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
              ) <= filterRadius
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
