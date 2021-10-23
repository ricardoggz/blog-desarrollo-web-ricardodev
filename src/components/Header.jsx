import React from 'react'
import "../styles/header.css"
import LogoDev from "../img/logodev.png";

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
                        <li><a href="../index.html">Repositorio</a></li>
                        <li><a href="../index.html">Creador del blog</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

