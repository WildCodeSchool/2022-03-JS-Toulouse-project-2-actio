// Calculate the distance between 2 points given their latitude and longitude using the Haversine formula
function distance(lat1, lon1, lat2, lon2) {
  const p = Math.PI / 180; // Math.PI / 180
  const c = Math.cos;
  const a =
    0.5 -
    c((lat2 - lat1) * p) / 2 +
    (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R with R = 6371 km; Distance in kilometers
}

export default distance;
