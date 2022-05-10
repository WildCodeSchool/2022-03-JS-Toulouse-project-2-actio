import axios from "axios";
import pascalCase from "./pascalCase";

const getInfos = async (sportsSelected, setSportInfos) => {
  let infos = [];
  if (sportsSelected.includes("apero")) {
    const res = await axios
      .get(
        "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=cafes-concerts&q="
      )
      .then((response) => {
        return response.data.records.map((el) => ({
          name: `BAR ${el.fields.eq_nom_equipement}`,
          coord: el.fields.geo_point_2d,
          key: el.recordid,
          sport: "apero",
        }));
      });
    infos = [...infos, ...res];
  }
  if (sportsSelected.includes("tennis")) {
    const res = await axios
      .get(
        "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=courts-de-tennis&q=&rows=50"
      )
      .then((response) => {
        return response.data.records.map((el) => ({
          name: `Court de tennis ${el.fields.index}`,
          coord: el.fields.geo_point_2d,
          key: el.recordid,
          sport: "tennis",
        }));
      });
    infos = [...infos, ...res];
  }
  if (sportsSelected.includes("patinage")) {
    const res = await axios
      .get(
        "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=patinoires&q="
      )
      .then((response) => {
        return response.data.records.map((el) => ({
          name: `${pascalCase(el.fields.nom_complet)} | ${
            el.fields.telephone
          } | ${el.fields.adresse}`,
          coord: el.fields.geo_point_2d,
          key: el.recordid,
          sport: "patinage",
        }));
      });
    infos = [...infos, ...res];
  }
  if (sportsSelected.includes("skate")) {
    const res = await axios
      .get(
        "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=skate-parcs&q="
      )
      .then((response) => {
        return response.data.records.map((el) => ({
          name: `Skatepark ${el.fields.index}`,
          coord: el.fields.geo_point_2d,
          key: el.recordid,
          sport: "skate",
        }));
      });
    infos = [...infos, ...res];
  }
  if (sportsSelected.includes("natation")) {
    const res = await axios
      .get(
        "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=piscines&q=&rows=20"
      )
      .then((response) => {
        return response.data.records.map((el) => ({
          name: `Piscine ${el.fields.index} | ${el.fields.telephone} | ${el.fields.adresse}`,
          coord: el.fields.geo_point_2d,
          key: el.recordid,
          sport: "natation",
        }));
      });
    infos = [...infos, ...res];
  }
  if (sportsSelected.includes("petanque")) {
    const res = await axios
      .get(
        "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=boulodromes&q=&rows=100"
      )
      .then((response) => {
        return response.data.records.map((el) => ({
          name: `Boulodrome ${el.fields.index}`,
          coord: el.fields.geo_point_2d,
          key: el.recordid,
          sport: "petanque",
        }));
      });
    infos = [...infos, ...res];
  }
  if (sportsSelected.includes("fitness")) {
    const res = await axios
      .get(
        "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=site-communal-dimplantation-de-fitness&q=&rows=50"
      )
      .then((response) => {
        return response.data.records.map((el) => ({
          name: `Module de fitness ${pascalCase(el.fields.site)}`,
          coord: el.fields.geo_point_2d,
          key: el.recordid,
          sport: "fitness",
        }));
      });
    infos = [...infos, ...res];
  }
  if (sportsSelected.includes("football")) {
    const res = await axios
      .get(
        "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=stades&q=&rows=50"
      )
      .then((response) => {
        return response.data.records
          .filter((el) => el.fields.foot === "O")
          .map((el) => ({
            name: `Terrain de football ${el.fields.index}`,
            coord: el.fields.geo_point_2d,
            key: `foot_${el.recordid}`,
            sport: "football",
          }));
      });
    infos = [...infos, ...res];
  }
  if (sportsSelected.includes("rugby")) {
    const res = await axios
      .get(
        "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=stades&q=&rows=50"
      )
      .then((response) => {
        return response.data.records
          .filter((el) => el.fields.rugby === "O")
          .map((el) => ({
            name: `Terrain de rugby ${el.fields.index}`,
            coord: el.fields.geo_point_2d,
            key: `rugby_${el.recordid}`,
            sport: "rugby",
          }));
      });
    infos = [...infos, ...res];
  }
  if (
    sportsSelected.includes("volleyball") ||
    sportsSelected.includes("handball") ||
    sportsSelected.includes("basketball")
  ) {
    const res = await axios
      .get(
        "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=gymnases&q=&rows=50"
      )
      .then((response) => {
        return response.data.records.map((el) => ({
          name: `Gymnase ${el.fields.index}`,
          coord: el.fields.geo_point_2d,
          key: el.recordid,
          sport: "gymnase",
        }));
      });
    infos = [...infos, ...res];
  }
  setSportInfos(infos);
};

export default getInfos;
