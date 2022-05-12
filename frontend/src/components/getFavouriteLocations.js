import axios from "axios";

const getFavouriteLocations = (setFavouriteLocations) => {
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/api/favourite-locations`)
    .then((response) => {
      setFavouriteLocations(response.data);
    });
};

export default getFavouriteLocations;
