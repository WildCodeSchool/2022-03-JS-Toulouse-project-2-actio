import React from "react";
// import Select from "react-select";
import "./FilterMenu.css";

const sports = [
  {
    label: "Handball",
    value: "handball",
  },
  {
    label: "Fitness",
    value: "fitness",
  },
  {
    label: "Football",
    value: "football",
  },
  {
    label: "Rugby",
    value: "rugby",
  },
  {
    label: "Volley-ball",
    value: "volley-ball",
  },
  {
    label: "Pétanque",
    value: "petanque",
  },
  {
    label: "Tennis",
    value: "tennis",
  },
  {
    label: "Patinage",
    value: "patinage",
  },
  {
    label: "Skate",
    value: "skate",
  },
  {
    label: "Natation",
    value: "natation",
  },
];

// const style = {
//   control: (styles) => ({
//     ...styles,
//     backgroundColor: "#FFC857",
//     opacity: "0.8",
//     position: "relative",
//     left: "30%",
//     width: "40%",
//     boderColor: "#FFC857",
//   }),
//   option: (styles) => ({
//     ...styles,
//     backgroundColor: "#FFC857",
//     width: "40%",
//     position: "relative",
//     left: "30%",
//   }),
// };

function FilterMenu(props) {
  const { setSportSelected } = props;

  const handleChange = (e) => {
    setSportSelected(e.target.value);
  };

  return (
    <div className="FilterMenu">
      {/* <Select options={sports} isSearchable styles={style} /> */}
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
