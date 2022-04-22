import React from "react";
import SwitchMapListFilter from "../components/SwitchMapListFilter";
import "./List.css";

function List() {
  return (
    <div className="list">
      <SwitchMapListFilter />
      <div className="list__component">
        <p>LIST</p>
      </div>
    </div>
  );
}

export default List;
