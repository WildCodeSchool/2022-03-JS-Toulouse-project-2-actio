// import React, { useState, useEffect, useContext } from "react";
// import { useSearchParams } from "react-router-dom";
// import axios from "axios";
// import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import { SportContext } from "../contexts/SportContext";
// import ChangeSportPicture from "../components/ChangeSportPicture";
// import "./Infos.css";

// function Infos() {
//   const { sportInfos } = useContext(SportContext);
//   const [address, setAddress] = useState("");
//   const [searchParams] = useSearchParams();
//   // const name = searchParams.get("name");
//   // const coord = searchParams.get("coord");
//   // const sport = searchParams.get("sport");
//   const locationId = searchParams.get("id");
//   // const fav = searchParams.get("fav");
//   // const favBool = fav === "true";
//   let newName = "";
//   const newCoord = coord.split(",").map((e) => parseFloat(e));

//   if (name.includes("|")) {
//     newName = name.split("|");
//   } else {
//     newName = [name];
//   }

//   useEffect(() => {
//     axios
//       .get(
//         `https://api-adresse.data.gouv.fr/reverse/?lon=${newCoord[1]}&lat=${newCoord[0]}`
//       )
//       .then((response) => {
//         setAddress(response.data.features[0].properties.label);
//       });
//   }, []);

//   const [favourite, setFavourite] = useState(favBool);
//   // useEffect(() => {
//   //   axios
//   //     .get(`http://localhost:5000/api/favourite-locations/${locationId}`)
//   //     .then(() => setFavourite(true));
//   // }, []);

//   const handleFavourite = () => {
//     if (favourite) {
//       axios.delete(
//         `http://localhost:5000/api/favourite-locations/${locationId}`
//       );
//     } else {
//       axios.post("http://localhost:5000/api/favourite-locations", {
//         locationId,
//         favourite: !favourite,
//       });
//     }
//     setFavourite(!favourite);
//   };

//   return (
//     <div className="Infos">
//       <div className="chosenSport-picture">{ChangeSportPicture(sport)}</div>

//       <div className="desktop-right">
//         <div className="location-name">
//           <h2 className="name">
//             <strong>{newName[0]}</strong>
//           </h2>
//         </div>

//         <div className="location-infos">
//           <div className="fas location-details fa-xs">
//             <img
//               src="/src/assets/location-icone.svg"
//               alt="icone de localisation"
//             />
//             <p>{address}</p>
//           </div>

//           <div className="fas phone-details fa-xs">
//             <img
//               src="/src/assets/phone-icone.svg"
//               alt="icone de téléphone"
//               className="phone-icone"
//             />
//             <p>05 61 22 32 64</p>
//           </div>

//           <div className="fas web-icone fa-xs">
//             <img
//               src="/src/assets/web-icone.svg"
//               alt="icone de web"
//               className="web-icone"
//             />
//             <p>point.accueil.inscriptions@mairie-toulouse.fr</p>
//           </div>
//         </div>

//         <div className="map">
//           <MapContainer center={newCoord} zoom={15}>
//             <TileLayer
//               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               className="map-tiles"
//             />
//             <button
//               className="btn-favourite"
//               onClick={handleFavourite}
//               type="submit"
//             >
//               {favourite ? "♥" : "♡"}
//             </button>
//             <Marker position={newCoord} />
//           </MapContainer>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Infos;
