import React from "react";
import "./Slider.css";

function Slider({ value, setValue }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="slidercontainer">
      <input
        type="range"
        min="1"
        max="20"
        value={value}
        onChange={handleChange}
        className="slider"
      />
      <p>{value} km</p>
    </div>
  );
}

export default Slider;
