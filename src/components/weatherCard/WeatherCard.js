import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import locationIcon from "../../assets/locationLogo.svg";
import thermometer from "../../assets/thermometer.svg";
import humidity from "../../assets/humidity.svg";
import back from "../../assets/back.svg";

function WeatherCard() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="weatherContainer">
      <div className="cardHeader">
        <div className="headerContent" onClick={() => navigate(-1)}>
          <img className="backIcon" src={back} alt=" " />
          <span>Weather App</span>
        </div>
      </div>
      <div className="content">
        <img
          src={`https://openweathermap.org/img/wn/${location.state.temp.weather[0].icon}@2x.png`}
          alt="?"
        />
        <div className="temp">{location.state.temp.main.temp}°C</div>
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {location.state.temp.weather[0].description}{" "}
        </div>
        <div
          style={{
            marginTop: "5px",
            boxSizing: "border-box",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "15px",
          }}
        >
          <img
            style={{ width: "15px", marginRight: "5px" }}
            src={locationIcon}
            alt=""
          />
          {location.state.temp.name},{location.state.temp.sys.country}
        </div>
      </div>
      <div className="cardFooter">
        <div className="left">
          <img style={{ width: "35px" }} src={thermometer} alt="" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <span>{location.state.temp.main.feels_like}°C</span>
            <span style={{ fontSize: "12px", textAlign: "center" }}>
              Feels like
            </span>
          </div>
        </div>

        <div className="right">
          <img style={{ width: "35px" }} src={humidity} alt="" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              marginLeft: "5px",
            }}
          >
            <span>{location.state.temp.main.humidity}%</span>
            <span style={{ fontSize: "12px", textAlign: "center" }}>
              Humidity
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
