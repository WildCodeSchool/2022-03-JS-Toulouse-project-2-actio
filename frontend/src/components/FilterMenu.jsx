import React from "react";
import sports from "./sports";
import "./FilterMenu.css";

function FilterMenu(props) {
  const { setSportSelected } = props;

  const handleChange = (e) => {
    setSportSelected(e.target.value);
  };

  return (
    <div className="FilterMenu">
      <select name="sports" className="sports-select" onChange={handleChange}>
        <option value="">-- Choisis ton activité --</option>
        {/* Add a sort in order to sort the sports alphabetically */}
        {sports
          .sort((a, b) => a.label.localeCompare(b.label))
          .map((sport) => (
            <option key={sport.value} value={sport.value}>
              {sport.label}
            </option>
          ))}
      </select>
    </div>
  );
}

export default FilterMenu;
