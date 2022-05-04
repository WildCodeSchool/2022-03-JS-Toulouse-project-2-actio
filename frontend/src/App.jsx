import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Map from "./pages/Map";
import List from "./pages/List";
import Quiz from "./pages/Quiz";
import QuizResult from "./pages/QuizResult";
import Infos from "./pages/Infos";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/map/:sport" element={<Map />} />
          <Route path="/list" element={<List />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/QuizResult/:result" element={<QuizResult />} />
          <Route path="/Infos" element={<Infos />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
