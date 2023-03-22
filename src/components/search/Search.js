import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Search.css";
import Suggestions from "./Suggestions";

function Search() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          getWeatherData(position.coords.latitude, position.coords.longitude);
          console.log(
            "location:",
            position.coords.latitude,
            position.coords.longitude
          );
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const getWeatherData = async (latitude, longitude) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=bd25513d09224df4078ad37187738f68&units=metric`
      )
      .then((resp) => {
        setWeatherData(resp);
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOptionClick = (lat, lon) => {
    getWeatherData(lat, lon);
  };

  useEffect(() => {
    setSuggestions([]);
    const delayDebounceFn = setTimeout(() => {
      axios
        .get(
          ` http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=bd25513d09224df4078ad37187738f68`
        )
        .then((resp) => {
          setSuggestions(resp.data);
          console.log("coordinates:", resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(location);
  };

  return (
    <div className="searchContainer">
      <form onSubmit={handleSubmit}>
        <input
          //   onChange={getName}
          onChange={(e) => setLocation(e.target.value)}
          className="searchBar"
          value={location}
          type={"text"}
          placeholder="Enter city name"
        />
        {/* <input type="submit" hidden /> */}
      </form>
      {suggestions.length !== 0 && location.length !== 0 ? (
        <div className="suggestions">
          <Suggestions
            handleOptionClick={handleOptionClick}
            suggestion={suggestions}
          />
        </div>
      ) : null}
      <div style={{ color: "rgb(209,209,209)" }} className="dividerLine">
        or
      </div>
      <button className="locationButton" onClick={handleGetCurrentLocation}>
        Get Device Location
      </button>
    </div>
  );
}

export default Search;
