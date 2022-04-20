import React, { useState, useEffect } from "react";
import { useMap, Marker } from "react-leaflet";

function LocationMarker() {
  const [position, setPosition] = useState(null);

  const map = useMap();
  const handleOnLocationFound = (e) => {
    setPosition(e.latlng);
    map.flyTo(e.latlng, map.getZoom());
  };
  useEffect(() => {
    map.locate().on("locationfound", handleOnLocationFound);
  }, [map]);

  return position === null ? null : <Marker position={position} />;
}

export default LocationMarker;
