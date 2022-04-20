import React, { useState, useEffect } from "react";
import { useMap, Marker } from "react-leaflet";

function LocationMarker() {
  const [position, setPosition] = useState(null);

  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map]);

  return position === null ? null : <Marker position={position} />;
}

export default LocationMarker;
