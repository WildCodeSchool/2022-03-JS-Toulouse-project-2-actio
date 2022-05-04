import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { AnimatePresence } from "framer-motion";
import LocationMarker from "../components/LocationMarker";
import SwitchMapListFilter from "../components/SwitchMapListFilter";
import FilterMenu from "../components/FilterMenu";
import distance from "../components/distance";
import getInfos from "../components/getInfos";
import Icon from "../components/Icon";
import "./Map.css";

function Map() {
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

  // Define a value for the slider, by default set to 2 km
  const [value, setValue] = useState(2);

  // Set a radius to display markers within this radius in kilometers
  const radius = value;

  // We create a state to display or not the FilterMenu component
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="Map">
      <SwitchMapListFilter
        showFilter={showFilter}
        setShowFilter={setShowFilter}
      />
      {/* the tag AnimatePresence is to animate the FilterMenu component when it is unmounted thanks to the library framer-motion */}
      <AnimatePresence>
        {showFilter ? (
          <FilterMenu
            setSportsSelected={setSportsSelected}
            sportsSelected={sportsSelected}
            value={value}
            setValue={setValue}
          />
        ) : null}
      </AnimatePresence>
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
