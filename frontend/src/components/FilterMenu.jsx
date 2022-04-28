import React from "react";
import sports from "./sports";
import "./FilterMenu.css";

function FilterMenu(props) {
  const { sportsSelected, setSportsSelected } = props;

  const handleChange = (e) => {
    if (sportsSelected.includes(e.target.value)) {
      const index = sportsSelected.indexOf(e.target.value);
      sportsSelected.splice(index, 1);
      setSportsSelected([...sportsSelected]);
    } else {
      setSportsSelected([...sportsSelected, e.target.value]);
    }
  };

  return (
    <div className="FilterMenu">
      {/* Add a sort in order to sort the sports alphabetically */}
      {/* if a sport is passed as an url param, checked the checkbox corresponding to the sport with checked = {sportsSelected.includes(sport.value)} */}
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
              checked={sportsSelected.includes(sport.value)}
            />
            {sport.label}
          </label>
        ))}
    </div>
  );
}

export default FilterMenu;
