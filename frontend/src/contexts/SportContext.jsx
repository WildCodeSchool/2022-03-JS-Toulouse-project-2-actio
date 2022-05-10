import { createContext, useState, useEffect } from "react";
import getInfos from "../components/getInfos";

const SportContext = createContext();

function SportProvider({ children }) {
  // sportsSelected is to know which sport has been selected by the user using the filter
  const [sportsSelected, setSportsSelected] = useState([]);

  // sportInfos are the data that we retrieve from the APIs (coordinates & name of the place)
  const [sportInfos, setSportInfos] = useState([]);

  useEffect(() => {
    getInfos(sportsSelected, setSportInfos);
  }, [sportsSelected]);

  return (
    <SportContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ sportsSelected, setSportsSelected, sportInfos, setSportInfos }}
    >
      {children}
    </SportContext.Provider>
  );
}

export { SportContext, SportProvider };
