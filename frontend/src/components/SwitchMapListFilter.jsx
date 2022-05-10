import React from "react";
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
        <label htmlFor="mySwitchCarte" className="switch__label">
          <input
            className="switch__input"
            type="radio"
            value="list"
            name="map"
            id="mySwitchCarte"
            onClick={handleListClick}
          />
          Liste
        </label>
        <label htmlFor="mySwitchFiltre" className="switch__label">
          <input
            className="switch__input"
            type="radio"
            value="filter"
            name="map"
            id="mySwitchFiltre"
            onClick={handleFilterClick}
          />
          Filtre
        </label>
      </div>
    </div>
  );
}
