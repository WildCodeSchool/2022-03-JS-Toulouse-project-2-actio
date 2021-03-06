import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { AnimatePresence } from "framer-motion";
import { SportContext } from "../contexts/SportContext";
import LocationMarker from "../components/LocationMarker";
import SwitchMapListFilter from "../components/SwitchMapListFilter";
import FilterMenu from "../components/FilterMenu";
import distance from "../components/distance";
import List from "../components/List";
import getFavouriteLocations from "../components/getFavouriteLocations";
import Icon from "../components/Icon";
import "./Map.css";

function Map() {
  const { sportsSelected, setSportsSelected, sportInfos } =
    useContext(SportContext);

  // position corresponds to the coordinates of the user. We initialize it with the coordinates of Toulouse
  const [position, setPosition] = useState({ lat: 43.604652, lng: 1.444209 });
  // if we get a sport as an url param we set this sport to the sport selected
  const { sport } = useParams();

  useEffect(() => {
    if (sport) {
      setSportsSelected([sport]);
    }
  }, []);

  const [favouriteLocations, setFavouriteLocations] = useState([]);
  useEffect(() => {
    getFavouriteLocations(setFavouriteLocations);
  }, []);
  const idFavouriteLocations = favouriteLocations.map(
    (favouriteLocation) => favouriteLocation.location_id
  );

  // Define a value for the slider, by default set to 2 km
  const [value, setValue] = useState(5);

  // Set a radius to display markers within this radius in kilometers
  const radius = value;

  // We create a state to display or not the FilterMenu component
  const [showFilter, setShowFilter] = useState(false);

  // We create a state to display or not the List component
  const [showList, setShowList] = useState(false);

  return (
    <div className="Map">
      <h1 className="brand-title">Actio</h1>
      <SwitchMapListFilter
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        showList={showList}
        setShowList={setShowList}
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
        {showList ? <List sports={sportInfos} position={position} /> : null}
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
              <Popup>
                {sportInfo.name} {" | "}
                <Link to={`/infos?id=${sportInfo.key}`}>Plus d&apos;infos</Link>
                {idFavouriteLocations.includes(sportInfo.key) ? (
                  <>
                    {" "}
                    |{" "}
                    <span style={{ color: "red", fontSize: "1rem" }}>
                      &hearts;
                    </span>
                  </>
                ) : null}
              </Popup>
            </Marker>
          ))}
        <LocationMarker position={position} setPosition={setPosition} />
      </MapContainer>
    </div>
  );
}

export default Map;
