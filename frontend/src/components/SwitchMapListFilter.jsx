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
    <div className="switch">
      <input
        className="switch__input"
        type="radio"
        value="map"
        name="map"
        id="mySwitch1"
      />
      <NavLink className="switch__label" htmlFor="mySwitch1" to="/map">
        Map
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
        List
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
        filter
      </label>
    </div>
  );
}
