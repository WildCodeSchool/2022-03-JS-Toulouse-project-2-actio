import React from "react";
import { motion } from "framer-motion";
import distance from "./distance";
import SportCard from "./SportCard";
import "./List.css";

function List(props) {
  const { sports, position } = props;

  return (
    <motion.div
      className="List"
      initial={{ y: 500 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ y: 500 }}
    >
      <div className="List">
        <div className="List__Cards">
          {sports
            .sort((a, b) =>
              distance(position.lat, position.lng, a.coord[0], a.coord[1]) >
              distance(position.lat, position.lng, b.coord[0], b.coord[1])
                ? 1
                : -1
            )
            .map((sport) => (
              <SportCard
                title={sport.name}
                coord={sport.coord}
                position={position}
                info={sport.key}
              />
            ))}
        </div>
      </div>
    </motion.div>
  );
}

export default List;
