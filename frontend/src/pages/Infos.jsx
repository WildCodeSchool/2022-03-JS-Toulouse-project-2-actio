import React, { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { SportContext } from "../contexts/SportContext";
import ChangeSportPicture from "../components/ChangeSportPicture";
import Icon from "../components/Icon";
import "./Infos.css";

import locationIcon from "../assets/location-icone.svg";
import phoneIcon from "../assets/phone-icone.svg";
import webIcon from "../assets/web-icone.svg";

function Infos() {
  const { sportInfos } = useContext(SportContext);
  const [address, setAddress] = useState("");
  const [searchParams] = useSearchParams();
  const locationId = searchParams.get("id");
  const [sport] = useState(sportInfos.find((el) => el.key === locationId));

  let newName = "";

  if (sport.name.includes("|")) {
    newName = sport.name.split("|");
  } else {
    newName = [sport.name];
  }

  useEffect(() => {
    axios
      .get(
        `https://api-adresse.data.gouv.fr/reverse/?lon=${sport.coord[1]}&lat=${sport.coord[0]}`
      )
      .then((response) => {
        setAddress(response.data.features[0].properties.label);
      });
  }, []);

  const [favourite, setFavourite] = useState(false);
  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/favourite-locations/${locationId}`
      )
      .then(() => setFavourite(true));
  }, []);

  const handleFavourite = () => {
    if (favourite) {
      axios.delete(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/favourite-locations/${locationId}`
      );
    } else {
      axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/favourite-locations`,
        {
          locationId,
          favourite: !favourite,
        }
      );
    }
    setFavourite(!favourite);
  };

  return (
    <div className="Infos">
      <div className="chosenSport-picture">
        {ChangeSportPicture(sport.sport)}
      </div>

      <div className="desktop-right">
        <div className="location-name">
          <h2 className="name">
            <strong>{newName[0]}</strong>
          </h2>
        </div>

        <div className="location-infos">
          <div className="fas location-details fa-xs">
            <img src={locationIcon} alt="icone de localisation" />
            <p>{address}</p>
          </div>

          <div className="fas phone-details fa-xs">
            <img
              src={phoneIcon}
              alt="icone de t??l??phone"
              className="phone-icone"
            />
            <p>
              {newName[0].includes("Bar") ? (
                <a href="tel:05.61.22.22.22" className="phone-link">
                  05.61.22.22.22
                </a>
              ) : (
                <a href="tel:05.61.22.32.64" className="phone-link">
                  05.61.22.32.64
                </a>
              )}
            </p>
          </div>

          <div className="fas web-icone fa-xs">
            <img src={webIcon} alt="icone de web" className="web-icone" />
            <p>
              {newName[0].includes("Bar") ? (
                <a
                  href="https://www.pagesjaunes.fr/annuaire/toulouse-31/bar"
                  className="mail-link"
                >
                  https://www.pagesjaunes.fr/annuaire/toulouse-31/bar
                </a>
              ) : (
                <a
                  href="mailto:point.accueil.inscriptions@mairie-toulouse.fr"
                  className="mail-link"
                >
                  point.accueil.inscriptions@mairie-toulouse.fr
                </a>
              )}
            </p>
          </div>
        </div>

        <div className="map">
          <MapContainer center={sport.coord} zoom={15}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              className="map-tiles"
            />
            <button
              className="btn-favourite"
              onClick={handleFavourite}
              type="submit"
            >
              {favourite ? "???" : "???"}
            </button>
            <Marker position={sport.coord} icon={Icon} />
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default Infos;
