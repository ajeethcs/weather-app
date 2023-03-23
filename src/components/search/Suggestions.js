import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./suggestions.css";

function Suggestions(props) {
  let suggestion = props.suggestion;
  //   let handleOptionClick = props.handleOptionCLick;
  const array = [1, 2, 3];
  useEffect(() => {
    // suggestions.map((city) => {
    //   {
    //     console.log("da", city.state);
    //     <Suggestions
    //       cityName={city.name}
    //       state={city?.state}
    //       countryCode={city.country}
    //     />;
    //   }
    // });
    // console.log("myr", suggestion);
    // suggestion.suggestion.map((obj) => {
    //   console.log(obj);
    // });
    // console.log(suggestions);
  }, []);

  const handleClick = (e, key) => {
    props.handleOptionClick(suggestion[key].lat, suggestion[key].lon);
  };

  return (
    <div>
      {suggestion.map((obj, key) => {
        return (
          <div
            className="option"
            key={key}
            onClick={(e) => handleClick(e, key)}
          >
            <Link
              style={{ textDecoration: "none", color: "rgb(176, 176, 176)" }}
            >
              {obj?.name}, {obj?.state}, {obj?.country}
              <div
                className="line"
                style={{
                  // borderBottom: "1px solid lightGray",
                  marginBottom: "2px",
                }}
              ></div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Suggestions;
