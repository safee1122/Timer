import React from "react";
import "../assets/css/button.css";
function Button(props) {
  return <button className="generalButton">{props.name}</button>;
}

export default Button;
