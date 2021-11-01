import React from "react";
import {  Link } from "react-router-dom";
import Jslogo from "../../img/jslogo.png";
import Jslogo2 from "../../img/JSlogo2.png";
import "../Card/card.css"

export const Card = (props) => {
  return (
    <>
      <Link to="/section">
        <div className="card">
          <img src={Jslogo} alt="JS-LOGO" />
          <span>{props.title}</span>
        </div>
      </Link>
      </>
  );
};
