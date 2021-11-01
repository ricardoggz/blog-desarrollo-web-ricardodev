import React from "react";
import {Link } from "react-router-dom";
import LogoDev from "../../img/logodev.png";
import "../Header/header.css";

function Header() {
    return (
      <header>
        <div className="flex-container menu-container">
          <Link to="/">
            <img src={LogoDev} alt="Ricardo.Dev" className="logo" />
            </Link>
          <nav>
            <input type="checkbox" id="btn-menu" />
            <label htmlFor="btn-menu" className="bar-btn">
              <i className="bi bi-list"></i>
            </label>
            <ul className="list-menu">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/about">Sobre mí</Link>
              </li>
              <li>
                <a
                  href="https://github.com/ricardoggz/blog-desarrollo-web-ricardodev"
                  target="blank"
                >
                  Repositorio
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  export { Header };