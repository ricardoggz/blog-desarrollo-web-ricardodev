import React from "react";
import {  Link } from "react-router-dom";
import "../Card/card.css"

export const Card = (props) => {
  return (
    <>
      <Link to="/section">
        <div className="card">
          <img src={props.image} alt="JS-LOGO" />
          <span>{props.title}</span>
        </div>
      </Link>
      </>
  );
};
