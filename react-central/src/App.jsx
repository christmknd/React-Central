import "./App.css";
import Navbar from "./components/ui/Navbar";
import AgeCalculator from "./views/javascript/AgeCalculator";
import BoredApp from "./views/api/BoredApp";
import Dice from "./views/javascript/Dice";
import Faussaire from "./views/library/Faussaire";
import Home from "./views/Home";
import ImcCalculator from "./views/maths/ImcCalculator";
import PageNotFound from "./views/PageNotFound";
import ParapluieApp from "./views/api/ParapluieApp";
import PasswordGenerator from "./views/javascript/PasswordGenerator";
import TemperatureConvertor from "./views/maths/TemperatureConverter";
import Time from "./views/javascript/Time";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <div className="app">
      <div className="nav-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ageCalc" element={<AgeCalculator />} />
          <Route path="/bored" element={<BoredApp />} />
          <Route path="/dice" element={<Dice />} />
          <Route path="/faussaire" element={<Faussaire />} />
          <Route path="/imc" element={<ImcCalculator />} />
          <Route path="/meteo" element={<ParapluieApp />} />
          <Route path="/passwordGenerator" element={<PasswordGenerator />} />
          <Route path="/temperature" element={<TemperatureConvertor />} />
          <Route path="/clock" element={<Time />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
