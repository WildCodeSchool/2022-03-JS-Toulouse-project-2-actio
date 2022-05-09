import React from "react";
import ReactDOM from "react-dom";
import { SportProvider } from "./contexts/SportContext";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <SportProvider>
      <App />
    </SportProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
