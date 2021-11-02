import React from "react";
import { Link } from "react-router-dom";

import jsLogo from "../../img/jslogo.png";
import jsLogoBlue from "../../img/jslogoBlue.png";
import jsLogoBlack from "../../img/jslogoBlack.png";
import reactLogo from "../../img/reactlogo.png";

import { Card } from "../../components/Card/Card";
import "../Home/main.css";

function Home() {
  return (
    <main>
      <section className="flex-container cards-container">
        <Link to="/sectionjs">
          <Card title="Un poco de historia" image={jsLogo} />
        </Link>

        <Link to="/">
          <Card title="Declarando variables" image={jsLogo} />
        </Link>

        <Link to="/">
          <Card title="¿Qué son los arreglos?" image={jsLogoBlue} />
        </Link>

        <Link to="/">
          <Card title="Objetos" image={jsLogoBlue} />
        </Link>

        <Link to="/">
          <Card title="Funciones en JavaScript" image={jsLogoBlack} />
        </Link>

        <Link to="/">
          <Card title="Primeros pasos en react" image={reactLogo} />
        </Link>
      </section>
    </main>
  );
}

export { Home };
