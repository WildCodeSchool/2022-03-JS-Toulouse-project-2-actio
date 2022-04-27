import React from "react";
import sports from "./sports";
import "./FilterMenu.css";

function FilterMenu(props) {
  const { sportsSelected, setSportsSelected } = props;

  // const handleChange = (e) => {
  //   setSportsSelected(e.target.value);
  // };

  const handleChange = (e) => {
    setSportsSelected([...sportsSelected, e.target.value]);
  };

  return (
    <div className="FilterMenu">
      {/* Add a sort in order to sort the sports alphabetically */}
      {sports
        .sort((a, b) => a.label.localeCompare(b.label))
        .map((sport) => (
          <label key={sport.value} htmlFor={sport.value}>
            <input
              type="checkbox"
              key={sport.value}
              id={sport.value}
              value={sport.value}
              onChange={handleChange}
            />
            {sport.label}
          </label>
        ))}
      {/* <select
        className="sports-select"
        onChange={handleChange}
        value={sportsSelected}
      >
        <option value="">-- Choisis ton activité --</option> */}
      {/* Add a sort in order to sort the sports alphabetically */}
      {/* {sports
          .sort((a, b) => a.label.localeCompare(b.label))
          .map((sport) => (
            <option key={sport.value} value={sport.value}>
              {sport.label}
            </option>
          ))}
      </select> */}
    </div>
  );
}

export default FilterMenu;
