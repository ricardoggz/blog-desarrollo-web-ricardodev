import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Jslogo from "../img/jslogo.png";
import Jslogo2 from "../img/JSlogo2.png";
import Reactlogo from "../img/reactlogo.png";
import "../styles/card.css";

export const Card = () => {
  return (
      
        
          <section className="flex-container cards-container">
            <Link to="/section">
          <div className="card">
            <img src={Jslogo} alt="JS-LOGO" />
            <span>Un poco de historia</span>
          </div>
          </Link>

          <Link to="/variables">
          <div className="card">
            <img src={Jslogo2} alt="JS-LOGO" />
            <span>Declarando variables</span>
          </div>
          </Link>

          <Link to="#">
          <div className="card">
            <img src={Jslogo} alt="JS-LOGO" />
            <span>Utilizando funciones</span>
          </div>
          </Link>

          <Link to="#">
          <div className="card">
            <img src={Jslogo} alt="JS-LOGO" />
            <span>¿Qué son los arreglos?</span>
          </div>
          </Link>

          <Link to="#">
          <div className="card">
            <img src={Jslogo} alt="JS-LOGO" />
            <span>Objetos en JavaScript</span>
          </div>
          </Link>

          <Link to="#">
          <div className="card">
            <img src={Reactlogo} alt="REACT-LOGO" />
            <span>Primeros pasos en react</span>
          </div>
          </Link>
          </section>
        
        
  );
};
