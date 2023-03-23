import "./App.css";
import WeatherApp from "./WeatherApp";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import WeatherCard from "./components/weatherCard/WeatherCard";

function App() {
  return (
    <div className="container">
      {/* <WeatherApp /> */}
      <Routes>
        <Route exact path="/" element={<WeatherApp />} />
        <Route exact path="/currentweather" element={<WeatherCard />} />
      </Routes>
    </div>
  );
}

export default App;
