import React from "react";

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
];

function FilterMenu() {
  // THE FOLLOWING IS TO HANDLE THE SPORT SELECTED
  // const [sportSelected, setSportSelected] = useState("");

  // const handleChange = (e) => {
  //   setSportSelected(e.target.value);
  // };

  return (
    <div className="FilterMenu">
      <select name="sports" id="sports-select">
        <option value="">-- Choisis ton activité --</option>
        {sports.map((sport) => (
          <option key={sport.value} value={sport.value}>
            {sport.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterMenu;
