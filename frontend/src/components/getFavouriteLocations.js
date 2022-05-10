import axios from "axios";

const getFavouriteLocations = (setFavouriteLocations) => {
  axios
    .get("http://localhost:5000/api/favourite-locations")
    .then((response) => {
      setFavouriteLocations(response.data);
    });
};

export default getFavouriteLocations;
