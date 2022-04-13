import { Link } from "react-router-dom";
import React from "react";

function Infos() {
  return (
    <div>
      <Link to="/Quiz">Quiz</Link>
      <Link to="/Map">Map</Link>

      <p>Hello on the Infos page</p>
    </div>
  );
}

export default Infos;
