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
            <h3>Un poco de historia</h3>
          </div>
          </Link>

          <Link to="/variables">
          <div className="card">
            <img src={Jslogo2} alt="JS-LOGO" />
            <h3>Declarando variables</h3>
          </div>
          </Link>

          <Link to="#">
          <div className="card">
            <img src={Jslogo} alt="JS-LOGO" />
            <h3>Utilizando funciones</h3>
          </div>
          </Link>

          <Link to="#">
          <div className="card">
            <img src={Jslogo} alt="JS-LOGO" />
            <h3>¿Qué son los arreglos?</h3>
          </div>
          </Link>

          <Link to="#">
          <div className="card">
            <img src={Jslogo} alt="JS-LOGO" />
            <h3>Objetos en JavaScript</h3>
          </div>
          </Link>

          <Link to="#">
          <div className="card">
            <img src={Reactlogo} alt="REACT-LOGO" />
            <h3>Primeros pasos en react</h3>
          </div>
          </Link>
          </section>
        
        
  );
};
