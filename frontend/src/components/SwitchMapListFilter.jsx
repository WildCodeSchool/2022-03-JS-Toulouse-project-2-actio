import React from "react";
import { NavLink } from "react-router-dom";
import "./SwitchMapListFilter.css";

export default function SwitchMapListFilter() {
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
      <input
        className="switch__input"
        type="radio"
        value="list"
        name="map"
        id="mySwitch2"
      />
      <NavLink className="switch__label" htmlFor="mySwitch2" to="/list">
        List
      </NavLink>
      <label htmlFor="mySwitch3" className="switch__label">
        <input
          className="switch__input"
          type="radio"
          value="filter"
          name="map"
          id="mySwitch3"
        />
        filter
      </label>
    </div>
  );
}
