import React from 'react'
import Jslogo from '../img/jslogo.png'
import "../styles/card.css"

export const Card = () => {
    return (
        <section className="flex-container main-cards-container">
            <div className="cards-container">
            <div className="card">
                <a href="./index.html"><img src={Jslogo} alt="JS-LOGO"/></a>
                <p>¿Qué es JavaScript?</p>
            </div>
            </div>
        </section>
    )
}
