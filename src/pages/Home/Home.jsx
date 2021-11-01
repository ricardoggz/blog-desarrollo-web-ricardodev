import React from "react";
import jsLogo from "../../img/jslogo.png";
import jsLogoBlue from "../../img/jslogoBlue.png";
import jsLogoBlack from "../../img/jslogoBlack.png"
import reactLogo from "../../img/reactlogo.png";

  /*import { Route } from "react-router-dom";
import { Card } from "./components/Card/Card";
import { About } from "../About/About";
import { Section } from "../Sectionjs/Section";
import { Variables } from "../Variables/Variables";*/


import { Card } from "../../components/Card/Card";
import "../Home/main.css";

function Home() {
  return (
    <main>
      <section className="flex-container cards-container">
        <Card title="Un poco de historia" image={jsLogo}/>
        <Card title="Declarando variables" image={jsLogo}/>
        <Card title ="¿Qué son los arreglos?" image={jsLogoBlue}/>
        <Card title="Objetos" image={jsLogoBlue}/>
        <Card title="Funciones en JavaScript" image={jsLogoBlack}/>
        <Card title ="Primeros pasos en react" image={reactLogo}/>


        {/*<Route path="/" exact component={Card} />
        <Route path="/about" component={About} />
        <Route path="/section" component={Section} />
  <Route path="/variables" component={Variables} />*/}
      </section>
    </main>
  );
}

export { Home };
