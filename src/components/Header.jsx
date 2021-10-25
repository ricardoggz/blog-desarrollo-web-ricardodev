import React from 'react';
import "../styles/header.css";
import LogoDev from "../img/logodev.png";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <div className="flex-container menu-container">
                <Link to="/"><img src={LogoDev} alt="Ricardo.Dev" className="logo"/></Link>
                <nav>
                    <input type="checkbox" id="menu"/>
                    <label htmlFor="menu" className="bar-btn">
                        <i class="bi bi-list"></i>
                    </label>
                    <ul className="list-menu">
                      
                        
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/about">Sobre mí</Link></li>

    
                    </ul>
                </nav>
            </div>
        </header>
    )
}

