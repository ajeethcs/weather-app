import React from "react";
import { Link } from "react-router-dom";
import "./suggestions.css";

function Suggestions(props) {
  let suggestion = props.suggestion;

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
