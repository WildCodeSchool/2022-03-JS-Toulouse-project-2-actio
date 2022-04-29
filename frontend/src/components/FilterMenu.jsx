import React from "react";
import Slider from "./Slider";
import sports from "./sports";
import "./FilterMenu.css";

function FilterMenu(props) {
  const { sportsSelected, setSportsSelected, value, setValue } = props;

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
      <Slider value={value} setValue={setValue} />
      {/* Add a sort in order to sort the sports alphabetically */}
      {/* if a sport is passed as an url param, checked the checkbox corresponding to the sport with checked = {sportsSelected.includes(sport.value)} */}
      <div className="checkbox-container">
        {sports
          .sort((a, b) => a.label.localeCompare(b.label))
          .map((sport) => (
            <div key={sport.value} className="checkbox-subcontainer">
              <input
                type="checkbox"
                id={sport.value}
                value={sport.value}
                onChange={handleChange}
                checked={sportsSelected.includes(sport.value)}
              />
              <label htmlFor={sport.value}>{sport.label}</label>
            </div>
          ))}
      </div>
    </div>
  );
}

export default FilterMenu;
