import React from "react";
import { NavLink } from "react-router-dom";
import "./SwitchMapListFilter.css";

export default function SwitchMapListFilter({
  showFilter,
  setShowFilter,
  showList,
  setShowList,
}) {
  const handleFilterClick = () => {
    setShowFilter(!showFilter);
  };
  const handleListClick = () => {
    setShowList(!showList);
  };

  return (
    <div className="switch-wrapper">
      <div className="switch">
        <input
          className="switch__input"
          type="radio"
          value="map"
          name="map"
          id="mySwitch1"
        />
        <NavLink className="switch__label" htmlFor="mySwitch1" to="/map">
          Carte
        </NavLink>
        <label htmlFor="mySwitch2" className="switch__label">
          <input
            className="switch__input"
            type="radio"
            value="list"
            name="map"
            id="mySwitch2"
            onClick={handleListClick}
          />
          Liste
        </label>
        <label htmlFor="mySwitch3" className="switch__label">
          <input
            className="switch__input"
            type="radio"
            value="filter"
            name="map"
            id="mySwitch3"
            onClick={handleFilterClick}
          />
          Filtre
        </label>
      </div>
    </div>
  );
}
