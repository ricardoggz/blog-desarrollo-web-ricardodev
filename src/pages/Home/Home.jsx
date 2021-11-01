import React from "react";

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
        <Card title="Un poco de historia"/>
        <Card title="Declarando variables"/>
        <Card title ="¿Qué son los arreglos?"/>
        <Card title="Objetos"/>
        <Card title="Funciones en JavaScript"/>
        <Card title ="Primeros pasos en react"/>


        {/*<Route path="/" exact component={Card} />
        <Route path="/about" component={About} />
        <Route path="/section" component={Section} />
  <Route path="/variables" component={Variables} />*/}
      </section>
    </main>
  );
}

export { Home };
