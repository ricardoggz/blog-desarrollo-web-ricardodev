import React from 'react';
import "../styles/header.css";
import LogoDev from "../img/logodev.png";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <div className="flex-container menu-container">
                <a href="../index.html"><img src={LogoDev} alt="Ricardo.Dev" className="logo"/></a>
                <nav>
                    <input type="checkbox" id="menu"/>
                    <label htmlFor="menu" className="bar-btn">
                        <i class="bi bi-list"></i>
                    </label>
                    <ul className="list-menu">
                      
                        
                        <li><a href="../index.html">Inicio</a></li>
                        <li><Link to="/about">Sobre mí</Link></li>
                        <li><a href="https://github.com/ricardoggz" target="blank">Github</a></li>

    
                    </ul>
                </nav>
            </div>
        </header>
    )
}

