import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Quiz from "./pages/Quiz";
import QuizResult from "./pages/QuizResult";
import Infos from "./pages/Infos";
import "./App.css";
import Navbar from "./components/Navbar";

const selectedLocation = {
  name: "PATINOIRE BELLEVUE",
  coord: [43.5677782397, 1.45329380983],
  type: "petanque",
  key: "1",
};

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App__dev-nav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/map">Map</NavLink>
            </li>
            <li>
              <NavLink to="/Quiz">Quiz</NavLink>
            </li>
            <li>
              <NavLink to="/QuizResult">QuizResult</NavLink>
            </li>
            <li>
              <NavLink to="/Infos">Infos</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/QuizResult" element={<QuizResult />} />
          <Route
            path="/Infos"
            element={
              <Infos
                locationName={selectedLocation.name}
                coordonnees={selectedLocation.coord}
                typeOfSport={selectedLocation.type}
              />
            }
          />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
