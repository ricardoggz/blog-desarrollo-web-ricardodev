import React from "react";
import { BrowserRouter as Router, Route,Switch, Link } from "react-router-dom";
import {Section} from "../pages/Section";
import Jslogo from "../img/jslogo.png";
import "../styles/card.css";

export const Card = () => {
  return (
      <Router>
        <Link to="/section">
          <div className="card">
            <img src={Jslogo} alt="JS-LOGO" />
            <h3>¿Qué es JavaScript?</h3>
          </div>
        </Link>
        <Switch>
            <Route path="/section" exact>
                <Section/>
            </Route>
        </Switch>
        </Router>
  );
};
