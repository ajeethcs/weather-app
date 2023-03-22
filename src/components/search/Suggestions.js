import React, { useEffect } from "react";
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
            {obj?.name}, {obj?.state}, {obj?.country}
            <div
              className="line"
              style={{
                // borderBottom: "1px solid lightGray",
                marginBottom: "2px",
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}

export default Suggestions;
