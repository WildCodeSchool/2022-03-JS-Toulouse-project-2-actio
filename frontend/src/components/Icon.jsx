import * as L from "leaflet";
import iconImage from "../assets/marker.png";

//  Create the icon constructor
const LeafIcon = L.Icon.extend({
  options: {},
});

// Create the icon with the new image
const Icon = new LeafIcon({
  iconUrl: iconImage,
  iconSize: [30, 30],
});

export default Icon;
