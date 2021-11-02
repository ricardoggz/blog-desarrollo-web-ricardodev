import React from "react";
import "../Card/card.css";

export const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="JS-LOGO" />
      <span>{props.title}</span>
    </div>
  );
};
